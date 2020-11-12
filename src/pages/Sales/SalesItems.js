import React, { useState, useEffect, useContext } from 'react';
import { storeContext } from '../../components/State/State';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { ThemeContext } from '../Context/ThemeContext'

const SalesItems = () => {

    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;
    const { storestate } = useContext(storeContext);
    const {Sales}=storestate
    const {products,toppings}=Sales
    const [pizzas, setPizzas] = useState([])
    const [burger, setBurger] = useState([])
    const [wings, setWings] = useState([])
    const [salad, setSalad] = useState([])
    const [platter, setPlatter] = useState([])


let allProductsSold, allToppingsSold = [];
products.forEach(x=>{
    allProductsSold.push(x.name)
})

toppings.forEach(topping => allToppingsSold.push(topping.name))

   const getItemsSold = (product,array) => {
    let filteredSales = []
    
    array.forEach(sale => {
        if (sale.includes(product)) {
            filteredSales.push(sale)
        }
    });
    return filteredSales
}

const getQuantity=(array)=>{
    let pure=[]
    let duplicate=[]
    let result={one:[],multiple:[]}
    array.forEach(item=>{
        if(pure.indexOf(item)>-1){
            duplicate.push(item)
        }else{
            pure.push(item)
        }   
    })
    if(duplicate.length>0){
        let obj={}
        for (const item of pure) {
            obj[item]=[item]
        }           
        for (const item of duplicate) {
            obj[item]=[...obj[item],item]
        }  
        let multi=[]
        for (const key in obj) {
            multi.push(obj[key])
        }     
        result={one:[],multiple:multi}    
    }else{
        result={one:pure,multiple:[]}
    }
  const {one,multiple}=result
  if(one.length>0){
      one.forEach(x=>{
          console.log(`${x} Qty:1`)
      })
  }else{
      multiple.forEach(x=>{
          console.log(`${x[0]} Qty:${x.length}`)
      })
  }
}

getQuantity(pizzas)
getQuantity(burger)
getQuantity(platter)
getQuantity(salad)
getQuantity(wings)

useEffect(() => {
    
        const pizza = getItemsSold("Pizza", allProductsSold);
        const special = getItemsSold("Special", allProductsSold);
        const bbq =  getItemsSold("Bbq", allProductsSold);
        const margherita =  getItemsSold("Margherita", allProductsSold);
        const allPizzas = pizza.concat(margherita, special, bbq);
        setPizzas(allPizzas);
        setSalad(getItemsSold("Salad", allProductsSold));
        setWings(getItemsSold("Wings", allProductsSold));
        setBurger(getItemsSold("Burger", allProductsSold));
        setPlatter(getItemsSold("PLATTER", allProductsSold));

}, [products])

    return (
        <Row style={{padding: '20px'}}>
            <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                    <CardBody className="text-center">
                        <CardTitle>You Sold</CardTitle>
                        <h1>{pizzas.length ? pizzas.length : 0}</h1>
                        <CardSubtitle>{pizzas.length > 1 ? "Pizza(s) Today" : "Pizza Today" }</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
             <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
             <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                    <CardBody className="text-center">
                        <CardTitle>You Sold</CardTitle>
                        <h1>{burger.length ? burger.length : 0}</h1>
                        <CardSubtitle>{burger.length > 1 ? "Burgers Today" : "Burger Today" }</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                        <CardBody className="text-center">
                            <CardTitle>You Sold</CardTitle>
                            <h1>{wings.length ? wings.length : 0}</h1>
                            <CardSubtitle>{wings.length > 1 ? "Wings Today" : "Wing Today" }</CardSubtitle>
                        </CardBody>
                    </Card>
             </Col>
             <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                        <CardBody className="text-center">
                            <CardTitle>You Sold</CardTitle>
                            <h1>{salad.length ? salad.length : 0}</h1>
                            <CardSubtitle>{salad.length > 1 ? "Salad(s) Today" : "Salad Today" }</CardSubtitle>
                        </CardBody>
                    </Card>
             </Col>
             <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                        <CardBody className="text-center">
                            <CardTitle>You Sold</CardTitle>
                            <h1>{platter.length ? platter.length : 0}</h1>
                            <CardSubtitle>{platter.length > 1 ? "Platters Today" : "Platter Today" }</CardSubtitle>
                        </CardBody>
                    </Card>
             </Col>
         
        </Row>
    )
}
export default SalesItems
