import React, {
    useEffect,
    createContext,
    useReducer
} from 'react';
import axios from 'axios';

//Action Types
export const GET_PIZZA = "GET_PIZZA";
export const GET_SALAD = "GET_SALAD";
export const GET_BFW = "GET_BFW";
export const GET_GELATOS = "GET_GELATOS";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART";
export const PROCESS_ORDER = "PROCESS_ORDER";
export const GET_ORDERED_PRODUCTS = "GET_ORDERED_PRODUCTS"
export const LOADED = "LOADED";
export const LOADING = "LOADING";
export const ADD_ERROR = "ADD_ERROR";
export const CLEAR_SUCCESS = "CLEAR_SUCCESS";
export const DELETE_MESSAGES = "DELETE_MESSAGES";


//Capitalise first word
// const sentenceCase = (data) => {
//     let firstWord = data.slice(0, 1).toUpperCase()
//     let rest = data.slice(1).toLowerCase()
//     return `${firstWord}${rest}`
// }

//Actions dispatchers


export const getCategory = (data, type) => {
    return axios.post("https://lameloapis.herokuapp.com/getproducts", data, ).then(res => {
        return {
            type: type,
            products: res.data.products,
            prices: res.data.prices,
            // messages: "Logged In Successfully"
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status
        }

    })
}

export const processOrder = (data, config) => {
    return axios.post('https://lameloapis.herokuapp.com/orderview', data, config).then(res => {
        return {
            type: PROCESS_ORDER,
            data: res.data,
            messages: "Order Placed Successfully",
            success: true,
            cart: [],
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status
        }

    })
}

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}
export const UpdateCart = (data) => {
    return {
        type: UPDATE_CART,
        data: data
    }
}
export const load = (type) => {
    return {
        type: type
    }
}

//Reducer
const storeReducer = (state, action) => {
    switch (action.type) {
        case GET_PIZZA:
            return {
                ...state,
                pizza: {
                    products: action.products,
                    prices: action.prices
                },
                loading: false,
            }
        case GET_BFW:
            return {
                ...state,
                bfw: {
                    products: action.products,
                    prices: action.prices
                },
                loading: false,
            }
        case GET_GELATOS:
            return {
                ...state,
                gelatos: {
                    products: action.products,
                    prices: action.prices
                },
                loading: false,
            }
        case GET_SALAD:
            return {
                ...state,
                salad: {
                    products: action.products,
                    prices: action.prices
                },
                loading: false,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.data],
                loading: false,
            }
        case UPDATE_CART:
            return {
                ...state,
                cart: [...action.data],
                loading: false,
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case LOADED:
            return {
                ...state,
                loading: false,
            }
        case PROCESS_ORDER:
            return {
                ...state,
                Ordered: [...state.Ordered, action.data.Ordered],
                messages: action.messages,
                success: action.success,
                cart: action.cart,
                loading: false,
            }
        case GET_ORDERED_PRODUCTS:
            return {
                ...state,
                OrderedProduct: action.products,
                loading: false,
            }
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: false,
                loading: false,
            }
        case ADD_ERROR:
            return {
                ...state,
                message: action.data,
                status: action.status,
                loading: false,
            }
        case DELETE_MESSAGES:
            return {
                ...state,
                message: "",
                status: "",
                messages: ""
            }

        default:
            return {
                ...state
            }
    }
}



//build stateProvider

export const storeContext = createContext()

const StoreContextProvider = (props) => {
    const [storestate, storedispatch] = useReducer(storeReducer, {},
        () => {
            const localdata = localStorage.getItem("storestate");
            let finaldata = ""
            if (localdata) {
                const jsonify = JSON.parse(localdata)
                finaldata = {
                    pizza: {
                        products: [],
                        prices: []
                    },
                    bfw: {
                        products: [],
                        prices: []
                    },
                    salad: {
                        products: [],
                        prices: []
                    },
                    gelatos: {
                        products: [],
                        prices: []
                    },
                    User: "",
                    Ordered: [],
                    OrderedProduct: [],
                    loading: true,
                    cart: [],
                    prices: [],
                    ...jsonify,
                    message: "",
                    status: "",
                    messages: "",
                    check: "",
                }
            } else {
                finaldata = {
                    pizza: {
                        products: [],
                        prices: []
                    },
                    bfw: {
                        products: [],
                        prices: []
                    },
                    salad: {
                        products: [],
                        prices: []
                    },
                    gelatos: {
                        products: [],
                        prices: []
                    },
                    User: "",
                    Ordered: [],
                    OrderedProduct: [],
                    loading: true,
                    cart: [],
                    prices: [],
                    message: "",
                    status: "",
                    messages: "",
                    check: "",
                }
            }
            return finaldata
        }
    )
    useEffect(() => {
        localStorage.setItem("storestate", JSON.stringify(storestate))
    }, [storestate]);

    return ( <
        storeContext.Provider value = {
            {
                storestate,
                storedispatch
            }
        } > {
            props.children
        } <
        /storeContext.Provider>
    )

}

export default StoreContextProvider;



//     return ( < storeContext.Provider value = {{storestate, storedispatch} } > 
//         {props.children} 
//    < /storeContext.Provider>
//   );