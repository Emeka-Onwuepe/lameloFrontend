import React, {
    useEffect,
    createContext,
    useReducer
} from 'react';
import axios from 'axios';

//Action Types
export const GET_PIZZA = "GET_PIZZA";
export const GET_PLATTER = "GET_PLATTER";
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
export const PAYMENT = "PAYMENT";
export const GET_LOCATION = "GET_LOCATION";
export const ADD_LOGISTICS = "ADD_LOGISTICS";
export const SET_SCREEN_SIZE = "SET_SCREEN_SIZE";


//Capitalise first word
// const sentenceCase = (data) => {
//     let firstWord = data.slice(0, 1).toUpperCase()
//     let rest = data.slice(1).toLowerCase()
//     return `${firstWord}${rest}`
// }

//Actions dispatchers


export const getCategory = (data, type) => {
    return axios.post("https://lameloapis.herokuapp.com/getproducts", data, ).then(res => {
        console.log(res.data.toppings)
        return {
            type: type,
            products: res.data.products,
            prices: res.data.prices,
            toppings: res.data.toppings != undefined ? res.data.toppings : []
                // messages: "Logged In Successfully"
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            // data: err.response.data,
            // status: err.response.status
        }

    })
}

export const processOrder = (data, config) => {
    return axios.post('https://lameloapis.herokuapp.com/orderview', data, config).then(res => {
        console.log(res.data)
        return {
            type: PROCESS_ORDER,
            data: res.data.Ordered,
            messages: "Order Placed Successfully",
            success: true,
            cart: [],
            user: res.data.user
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            // data: err.response.data,
            // status: err.response.status
        }

    })
}



export const payment = (data, orderlist) => {
    return axios.post("https://lameloapis.herokuapp.com/payment", data, ).then(res => {
        const filtered = orderlist.filter(item => item.id != res.data.id)
        filtered.push(res.data)
        return {
            type: PAYMENT,
            data: filtered
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            // data: err.response.data,
            // status: err.response.status
        }

    })
}

export const locations = () => {
    return axios.get("https://lameloapis.herokuapp.com/location").then(res => {
        return {
            type: GET_LOCATION,
            data: res.data
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            // data: err.response.data,
            // status: err.response.status
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
export const AddLogistics = (data) => {
    return {
        type: ADD_LOGISTICS,
        data: data
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
                    prices: action.prices,
                    toppings: action.toppings
                },
                loading: false,
            }
        case GET_BFW:
            return {
                ...state,
                bfw: {
                    products: action.products,
                    prices: action.prices,
                    toppings: action.toppings
                },
                loading: false,
            }
        case GET_GELATOS:
            return {
                ...state,
                gelatos: {
                    products: action.products,
                    prices: action.prices,
                    toppings: action.toppings
                },
                loading: false,
            }
        case GET_SALAD:
            return {
                ...state,
                salad: {
                    products: action.products,
                    prices: action.prices,
                    toppings: action.toppings
                },
                loading: false,
            }
        case GET_PLATTER:
            return {
                ...state,
                platter: {
                    products: action.products,
                    prices: action.prices,
                    toppings: action.toppings
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
                Ordered: [...state.Ordered, action.data],
                messages: action.messages,
                success: action.success,
                cart: action.cart,
                User: action.user,
                logistics: 0,
                loading: false,
            }
        case PAYMENT:
            return {
                ...state,
                Ordered: action.data,
                loading: false,
            }
        case GET_LOCATION:
            return {
                ...state,
                locations: action.data,
                loading: false,
            }
        case ADD_LOGISTICS:
            return {
                ...state,
                logistics: action.data,
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
        case SET_SCREEN_SIZE:
            return {
                ...state,
                screenWidth: action.width,
                scrow: action.scrow
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
                        prices: [],
                        toppings: []
                    },
                    bfw: {
                        products: [],
                        prices: [],
                        toppings: []
                    },
                    salad: {
                        products: [],
                        prices: [],
                        toppings: []
                    },
                    gelatos: {
                        products: [],
                        prices: [],
                        toppings: []
                    },
                    platter: {
                        products: [],
                        prices: [],
                        toppings: []
                    },
                    User: "",
                    Ordered: [],
                    OrderedProduct: [],
                    loading: true,
                    cart: [],
                    scrow: window.pageYOffset,
                    width: window.innerWidth,
                    prices: [],
                    locations: [],
                    logistics: 0,
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
                        prices: [],
                        toppings: []
                    },
                    bfw: {
                        products: [],
                        prices: [],
                        toppings: []
                    },
                    salad: {
                        products: [],
                        prices: [],
                        toppings: []
                    },
                    gelatos: {
                        products: [],
                        prices: [],
                        toppings: []
                    },
                    platter: {
                        products: [],
                        prices: [],
                        toppings: []
                    },
                    User: "",
                    Ordered: [],
                    OrderedProduct: [],
                    loading: true,
                    cart: [],
                    scrow: window.pageYOffset,
                    width: window.innerWidth,
                    prices: [],
                    locations: [],
                    logistics: 0,
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

    useEffect(() => {
        const onresizer = () => {
            // console.log(window.pageYOffset)
            console.log(window.scrollY)
            storedispatch({
                type: SET_SCREEN_SIZE,
                width: window.innerWidth,
                scrow: window.pageYOffset
            })
        }
        document.addEventListener('resize', onresizer)
        document.addEventListener('scroll', onresizer)

        return () => {

        };
    }, [])


    // const onresizer = () => {
    //     console.log("ran from eventListener")
    //     storedispatch({
    //         type: SET_SCREEN_SIZE,
    //         width: window.innerWidth,
    //         scrow: window.pageYOffset
    //     })
    // }
    // window.addEventListener('resize', onresizer)
    // window.addEventListener('scroll', onresizer)





    // const onresizer = () => {
    //     console.log(window.innerHeight)
    //     storedispatch({
    //         type: SET_SCREEN_SIZE,
    //         width: window.innerWidth,
    //         scrow: window.pageYOffset
    //     })
    // }
    // window.addEventListener('resize', onresizer)
    // window.addEventListener('scroll', onresizer)



    return ( < storeContext.Provider value = {
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