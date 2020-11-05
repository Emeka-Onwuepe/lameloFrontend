import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LoginUser, storeContext, LOADED, LOADING, load } from "../components/State/State";
import { NavLink, Redirect} from 'react-router-dom';

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
        <fieldset>
            <form action="" method="post" onSubmit={onSubmit}>
                <label htmlFor="username">username</label>
                <input type="username" name="username" value={username} id="username" onChange={onChange} placeholder="Please Enter Your username" />
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" value={password} id="password" onChange={onChange} placeholder="Please Enter Your Password" />
                <button className='submitButton' type="submit">LOGIN</button>
            </form>
        </fieldset>
    );
}

Login.propTypes = {

};


export default Login;
