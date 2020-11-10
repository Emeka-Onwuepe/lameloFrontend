import React, { useContext, useEffect, useState } from 'react';
import { LoginUser, storeContext, LOADED, LOADING, load } from "../../components/State/State";
import './Login.css'

const Login = (props) => {
    const { storestate, storedispatch } = useContext(storeContext);


    const{logged} = storestate
    const initialState = {
        username: "", password: ""
    }

    useEffect(() => {
        storedispatch(load(LOADED))
    }, []);

    const [formstate, setFormstate] = useState(initialState);
    const { username, password } = formstate;

    const onChange = (e) => {
        setFormstate({ ...formstate, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = formstate;
        const data = JSON.stringify({ username, password })
        const config = { headers: { "Content-Type": "application/json" } }
        LoginUser(data, config).then(res => storedispatch(res))
        storedispatch(load(LOADING))
    }
    if (logged) {
        return window.location = "/admin/admin-dashboard";
    }
    return (
        <div className="container-fluid login-container">
            <h3 style={{textAlign: 'center', marginBottom: '-5px', fontWeight: 'bolder', fontSize: '40px'}} >Login</h3>
            <div style={{display: 'flex', justifyContent: 'center', alignItem: 'center', width: '100%'}}>
                
                <form action="" style={{width: '600px', padding:'10px'}} onSubmit={onSubmit} >
                    <div ><label htmlFor="username" style={{fontSize: '20px', fontWeight: 'bold'}}>username:</label>
                    <input type="username" name="username" value={username} id="username" onChange={onChange} placeholder="Please Enter Your username" className="form-control" style={{padding:'10px auto'}}/></div>
                    <div><label htmlFor="password" style={{fontSize: '20px', fontWeight: 'bold'}}>password:</label>
                    <input type="password" name="password" value={password} id="password" onChange={onChange} placeholder="Please Enter Your Password" className="form-control" style={{padding:'10px auto'}}/></div><br />
                    <button className='loginButton btn-block' type="submit" style={{padding:'20px auto'}}>LOGIN</button>
                </form>
            </div>
        </div>
    );
}


export default Login;
