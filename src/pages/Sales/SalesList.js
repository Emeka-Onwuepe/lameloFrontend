import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Container, Card } from 'reactstrap';
import { storeContext, getSales, refreshPage } from '../../components/State/State';
import './Sales.css';
import SalesItems from './SalesItems';
import { useHistory } from 'react-router-dom';


const SalesList = () => {
    const [sales, setSales] = useState([])
    const theme = useContext(ThemeContext);
    const { storestate, storedispatch } = useContext(storeContext);
    const { Orders, archive, logged } = storestate;
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;

    let allSales = Orders.concat(archive);

    const{Sales}=storestate;

    const history = useHistory()

    const dateNow = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth();
        const dateDay = date.getDate().toString().length < 2 ? "0" + date.getDate().toString() : date.getDate();
        const dateFormat = `${dateDay}/${months[dateMonth]}/${dateYear}`;
        return dateFormat;
    }


    const getDaySales = (date, array) => {
        let filteredSales = []
        array.forEach(sale => {
            if (sale.created.indexOf(date) > -1) {
                filteredSales.push(sale)
            }
        });
        return filteredSales
    }

    useEffect(() => {
        const sales = getDaySales(dateNow(new Date()), allSales)
        setSales(sales)
        let ids = []
        sales.forEach(item => ids.push(item.id))
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.AdminUser.token}` } }
        const data = { "action": "Get_Sales", "data": ids, "customer": "", "search": "" }
        getSales(data, config).then(res => storedispatch(res))

    }, [])
  
    if (!logged) {
        history.push("/login");
        refreshPage()
     }

    return (
        <Container className="dashboard-container">
            <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem' }}>
                <h3 style={{textAlign: 'center', fontSize:'30px'}}>
                    Daily Sales
                </h3>
             
                <hr style={{borderColor: checkTheme.bgColor}}/>

                {sales && sales.length > 0 ? <><h5 className="text-center">You have made</h5>
                    <h2 className="text-center sales-count">{sales.length}</h2>
                    <h5 className="text-center">{sales.length > 1 ? "Sales" : "Sale"}</h5>
                </> : <p className="text-center">No Sales Yet</p>}

                <SalesItems />
            </Card>

        </Container>

    )
}

export default SalesList
