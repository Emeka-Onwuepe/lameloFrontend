import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container, Alert
} from 'reactstrap';
import numbro from 'numbro';


const PizzaCard = ({pizzas,prices}) => {
let product = { id:"", image: "", name: "", brand: "", price: "", discription: "", multiprice: "" }
const [Display, setDisplay] = useState(false)
const [DivDisplay, setDivdisplay] = useState({ display: false, check: false })
const [priceState, setpriceState] = useState([])
const Style=  {
    "border": "1px #dadada solid",
    "display": Display ? "block":"none",
}
    
useEffect(() => {
}, [Display]);

  const filter=(array,price)=>{
  let items=[]
   array.forEach(id=>{ 
     let [match]=price.filter(price=>id==price.id)
     items.push(match)
    })
    return items
  }

const spliter=(id)=>{
let array=id.split("-")
let [priceID,productId]=array
return {priceID:parseInt(priceID),productId:parseInt(productId)}
}

  const OnClick = (e) => {
        setDisplay(!Display)
    }
      const onChange = (e) => {
const{priceID,productId}=spliter(e.target.id)
//get product

let selectedProduct = pizzas.filter(product=>product.id==productId)

console.log(selectedProduct)



      if(product.id!=""&& product.id !=productId){
        //set the product to the new one

        //clear the priceState

      }else{



         let [price] = prices.filter(x => x.id == priceID)
        price.checked = e.target.checked
        let [rest] = prices.filter(x => x.id != priceID)
        setpriceState([price, rest])
        console.log(priceState)

      }
        
       
    }
  return (
    <Container>
        <Row>
     {
         (pizzas && pizzas.length > 0) ? pizzas.map((pizza, index) => (
          
         <Col lg="4" key={index}>
             <Card className="card-container">
                <CardImg top width="95%" src={pizza.image} alt={`pizza-image-${pizza.image}`} height={250}/>
                <CardBody>
                <CardTitle><h3>{pizza.name}</h3></CardTitle>
                <CardText style={{"color":"black"}}>{pizza.description}</CardText>
                       {pizza.price === 0 && <p className="size-description">Please Select the Size You Need</p>}
                       {pizza.price === 0 && prices.length>0  ? 

    <div class="multiselect">
    <div class="selectBox" onClick={OnClick}>
      <select>
        <option>Select an option</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div id="checkboxes" style={Style}>
     {filter(pizza.multipleSIzes,prices)
                       .map((item, index) =>(
                         <div>
                              <input type="checkbox" onChange={onChange} className="checks" id={`${item.id}-${pizza.id}`}/>
                                  <label><span>Size:</span> <span>{item.size} - </span> <span>₦{numbro(parseInt(item.price)).format({thousandSeparated: true})}</span></label>
                        </div>
                       ))}
    </div>
  </div>
                       :  <p><b>Price:</b> <span>₦{numbro(parseInt(pizza.price)).format({thousandSeparated: true})}</span></p>}
                </CardBody>
            </Card>
         </Col>
        )): <Alert>Failed to load items</Alert>
     }
      
      </Row>
    </Container>
  );
};

export default PizzaCard;


// <div class="multiselect">
//     <div class="selectBox" onclick="showCheckboxes()">
//       <select>
//         <option>Select an option</option>
//       </select>
//       <div class="overSelect"></div>
//     </div>
//     <div id="checkboxes">
//      {filter(pizza.multipleSIzes,prices)
//                        .map((item, index) =>(
//                          <div>
//                               <input type="checkbox" className="checks"/>
//                                   <label><span>Size:</span> <span>{item.size} - </span> <span>₦{numbro(parseInt(item.price)).format({thousandSeparated: true})}</span></label>
//                         </div>
//                        ))}
//     </div>
//   </div>



// filter(pizza.multipleSIzes,prices)
//                        .map((item, index) =>(
//                               <div className="pretty p-rotate p-default" key={index}>
//                               <input type="checkbox" className="checks"/>
//                               <div className="state p-warning">
//                                   <label><span>Size:</span> <span>{item.size} - </span> <span>₦{numbro(parseInt(item.price)).format({thousandSeparated: true})}</span></label>
//                               </div>
//                           </div>
                         
//                        ))