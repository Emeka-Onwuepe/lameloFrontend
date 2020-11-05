import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Container, Card } from 'reactstrap';
import { storeContext } from '../../components/State/State';
import './Sales.css';

const SalesList = () => {
    const [sales, setSales] = useState([])
    const theme = useContext(ThemeContext);
    const { storestate } = useContext(storeContext);
    const { Orders, archive, logged } = storestate;
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;

    let allSales = Orders.concat(archive);


    const dateNow = (date) => {
        const months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth();
        const dateDay = date.getDate().toString().length < 2 ? "0" + date.getDate().toString() : date.getDate();
        const dateFormat = `${dateDay}/${months[dateMonth]}/${dateYear}` ;
        return dateFormat;
    }


    const getDaySales=(date, array)=>{
       let filteredSales=[]
        array.forEach(sale => {
            if(sale.created.indexOf(date)>-1){
                filteredSales.push(sale)
            }
        });
        return filteredSales
    }
    const getDailySales =(data, array)=>{
        let filteredSales=[]
         array.forEach(sale => {
             if(sale.created.indexOf(data)>-1){
                 filteredSales.push(sale)
             }
         });
         return filteredSales
     }

    useEffect(() => {
        setSales(getDaySales(dateNow(new Date()),allSales))
    }, [])

      if (!logged) {
        return window.location = "/login";
    }

    return (   
       <Container className="dashboard-container">
            <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem' }}>
                <h3 style={{textAlign: 'center', fontSize:'30px'}}>
                    Daily Sales
                </h3>
                {console.log(getDailySales("Pizza", sales))}
                <hr />
               
                {sales && sales.length > 0 ? <><h5 className="text-center">You have made</h5>
                <h2 className="text-center sales-count">{sales.length}</h2>
                    <h5 className="text-center">{sales.length > 1 ? "Sales" : "Sale"}</h5>
                </> : <p className="text-center">No Sales Yet</p>}
            </Card>
        </Container> 

    )
}

export default SalesList
