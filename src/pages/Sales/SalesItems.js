import React, { useState, useEffect, useContext } from 'react';
import { storeContext } from '../../components/State/State';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { ThemeContext } from '../Context/ThemeContext'
import ToolTip from '../ToolTips/ToolTip'
import Chart from './Chart';

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
    const [platter, setPlatter] = useState([]);
    const [topping, setTopping] = useState([]);
    // const [itemssold, setItemsSold] = useState([]);

    // const [Topping] = toppings;
    // const [Product] = products;
    const allProductsSold = [];
    const allToppingsSold = []



    // console.log(toppings, products)

   products.forEach(product => allProductsSold.push({"name": product.name, "qty": product.quantity}));
   

    toppings.forEach(topping => allToppingsSold.push({"name": topping.name, "qty": topping.quantity}));
    // console.log(allProductsSold, allToppingsSold)

  const getLength = (items) => {
      let quantity = [];
      let total = 0;
      
      items.forEach((item => quantity.push(item.qty)))
      for(let i = 0; i < quantity.length; i++){
          total += quantity[i]
      }
      return total
  }

  

    const getItemsSold = (product, array) => {
        let filteredSales = []
        if(array !== undefined) {
            array.forEach(sale => sale.name.includes(product) && filteredSales.push({"name": sale.name, "qty": sale.qty}));
        }

        return filteredSales
    }

    console.log(Sales)


  
    const getQuantity=(array)=>{
        let pure=[]
        let duplicate=[]
        array.forEach(element=>{ 
            const check = pure.filter(item => item.name == element.name)
                    if (check.length == 0) {
                        element.count=element.qty
                        pure.push(element)
                    }else{
                        element.count=element.qty
                        duplicate.push(element)
                    }
        })
        if(duplicate.length>0){
            duplicate.forEach(item=>{
                pure.forEach(elem=>{
                    if(item.name==elem.name){
                        elem.count= elem.count + item.count
                    }
                })

            })  
        }
     return pure;
      
    }

    const soldProductsList = (func) => (
        func.map((item, key) =><li key={key}>{`${item.name} : ${item.count}`}</li>)
    )


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
            setTopping(allToppingsSold);

    }, [products, toppings]);


    return (
        <>
        <Row style={{padding: '20px'}}>
            <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                    <ToolTip content={soldProductsList(getQuantity(pizzas))} direction="top">
                        <CardBody className="text-center">
                            <CardTitle>You Sold</CardTitle>
                            <h1>{getLength(pizzas) ? getLength(pizzas) : 0}</h1>
                            <CardSubtitle>{getLength(pizzas) > 1 ? "Pizza(s) Today" : "Pizza Today" }</CardSubtitle>
                        </CardBody>
                    </ToolTip>
                </Card>
            </Col>
             <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
             <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                    <ToolTip content={soldProductsList(getQuantity(burger))} direction="top">
                        <CardBody className="text-center">
                            <CardTitle>You Sold</CardTitle>
                            <h1>{getLength(burger) ? getLength(burger) : 0}</h1>
                            <CardSubtitle>{getLength(burger) > 1 ? "Burgers Today" : "Burger Today" }</CardSubtitle>
                        </CardBody>
                    </ToolTip>
                </Card>
            </Col>
            <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                    <ToolTip content={soldProductsList(getQuantity(wings))} direction="bottom">
                            <CardBody className="text-center">
                                <CardTitle>You Sold</CardTitle>
                                <h1>{getLength(wings) ? getLength(wings) : 0}</h1>
                                <CardSubtitle>{getLength(wings) > 1 ? "Wings Today" : "Wing Today" }</CardSubtitle>
                            </CardBody>
                        </ToolTip>
                    </Card>
             </Col>
           
             <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                
                    <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                        <ToolTip content={soldProductsList(getQuantity(salad))} direction="top">
                            <CardBody className="text-center">
                            
                                <CardTitle>You Sold</CardTitle>
                                <h1>{getLength(salad) ? getLength(salad) : 0}</h1>
                                <CardSubtitle>{getLength(salad) > 1 ? "Salad(s) Today" : "Salad Today" }</CardSubtitle>
                            
                            </CardBody>
                        </ToolTip>  
                    </Card>
                  
             </Col>
         
             <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                        <ToolTip content={soldProductsList(getQuantity(platter))} direction="left">
                            <CardBody className="text-center">
                                <CardTitle>You Sold</CardTitle>
                                <h1>{getLength(platter) ? getLength(platter) : 0}</h1>
                                <CardSubtitle>{getLength(platter) > 1 ? "Platters Today" : "Platter Today" }</CardSubtitle>
                            </CardBody>
                        </ToolTip>
                    </Card>
             </Col>
             <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                    <ToolTip content={soldProductsList(getQuantity(topping))} direction="right">
                        <CardBody className="text-center">
                            <CardTitle>You Sold</CardTitle>
                            <h1>{getLength(topping) ? getLength(topping) : 0}</h1>
                            <CardSubtitle>{getLength(topping) > 1 ? "Toppings Today" : "Topping Today" }</CardSubtitle>
                         </CardBody>
                     </ToolTip>
                    </Card>
             </Col>
            
        </Row>
        <Row>
           <Col lg="12" md="12" sm="12" xs="12" className="mt-4">
                <Card style={{ backgroundColor: checkTheme.cardHeader, padding: '1rem', borderColor: checkTheme.bgColor, boxShadow: checkTheme.navbarShadow, borderRadius: '0px' }}>
                    <CardBody>
                    <Chart pizzas={getLength(pizzas)} salad={getLength(salad)} wings={getLength(wings)} burger={getLength(burger)} platter={getLength(platter)} topping={getLength(topping)}/>
                 
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </>
    )
}
export default SalesItems
