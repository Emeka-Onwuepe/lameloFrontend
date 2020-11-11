import React, { useState, useEffect, useContext } from 'react';
import { storeContext, getSales, getHours } from '../../components/State/State';
import { Card, CardBody, CardTitle } from 'reactstrap'

const SalesItems = () => {

    const { storestate: { Sales: {products, toppings} } } = useContext(storeContext);
    const [pizza, setPizza] = useState([]);
    const [magheritta, setMagheritta] = useState([]);
    const [bbq, setBbq] = useState([])
    const [special, setSpecial] = useState([])


    const allProductsSold = products && products.length > 0 && products.map(item => item.name);
   const getItemsSold = (product,item) => {
    let filteredSales = []
    item.forEach(sale => {
        if (sale.includes(product)) {
            filteredSales.push(sale)
        }
    });
    return filteredSales
}

    useEffect(() => {
       setPizza(getItemsSold("Pizza", allProductsSold));
       setMagheritta(getItemsSold("Margherita", allProductsSold));
       setBbq(getItemsSold("Bbq", allProductsSold));
       setSpecial(getItemsSold("Special", allProductsSold));
       
    }, [])
    const pizzas = pizza.concat(magheritta,bbq,special)
    return (
        <div>
           
           <Card>
               {console.log(pizzas)}
           </Card>
        </div>
    )
}
export default SalesItems
