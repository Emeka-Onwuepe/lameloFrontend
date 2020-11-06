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
export const ADD_TO_TOPPING_CART = "ADD_TO_TOPPING_CART";
export const UPDATE_CART = "UPDATE_CART";
export const PROCESS_ORDER = "PROCESS_ORDER";
export const GET_ORDERED_PRODUCTS = "GET_ORDERED_PRODUCTS"
export const GET_ORDERED = "GET_ORDERED"
export const GET_ARCHIVE = "GET_ARCHIVE"
export const GET_PRODUCT_AND_CUSTOMER = "GET_PRODUCT_AND_CUSTOMER"
export const LOADED = "LOADED";
export const LOADING = "LOADING";
export const ADD_ERROR = "ADD_ERROR";
export const SUCCESS = "SUCCESS";
export const CLEAR_SUCCESS = "CLEAR_SUCCESS";
export const DELETE_MESSAGES = "DELETE_MESSAGES";
export const PAYMENT = "PAYMENT";
export const GET_LOCATION = "GET_LOCATION";
export const ADD_LOGISTICS = "ADD_LOGISTICS";
export const ADD_DESTINATION = "ADD_DESTINATION";
export const SET_SCREEN_SIZE = "SET_SCREEN_SIZE";
export const UPDATE_TOPPING_CART = "UPDATE_TOPPING_CART"
export const ADD_NOTIFICATION = "ADD_NOTIFICATION"
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const DELETE_USER = "DELETE_USER";

//Capitalise first word
// const sentenceCase = (data) => {
//     let firstWord = data.slice(0, 1).toUpperCase()
//     let rest = data.slice(1).toLowerCase()
//     return `${firstWord}${rest}`
// }

//Actions dispatchers

export const LoginUser = (data, config) => {
    return axios.post('https://lameloapis.herokuapp.com/login', data, config).then(res => {

        return {
            type: LOGIN,
            data: res.data,
            messages: "Logged In Successfully"
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status,
        }
    })
}

export const LogOut = (data, config) => {
    return axios.post('https://lameloapis.herokuapp.com/logout', null, config).then(res => {

        return {
            type: LOGOUT,
            messages: "Logged Out"
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status
        }

    })
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const getCategory = (data, type) => {
    return axios.post("https://lameloapis.herokuapp.com/getproducts", data, ).then(res => {
        return {
            type: type,
            products: res.data.products,
            prices: res.data.prices,
            toppings: res.data.toppings != undefined ? res.data.toppings : [],
            orderedTopping: res.data.toppings != undefined ? res.data.toppings : []
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
            data: res.data.Ordered,
            messages: "Order Placed Successfully",
            success: true,
            cart: [],
            toppingcart: [],
            user: res.data.user
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status
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
            data: err.response.data,
            status: err.response.status
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
            data: err.response.data,
            status: err.response.status
        }

    })
}
export const getOrder = (config) => {
    return axios.get("https://lameloapis.herokuapp.com/dashboard", config).then(res => {
        return {
            type: GET_ORDERED,
            data: res.data.ordered,
            customers: res.data.customers
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status
        }

    })
}

export const performAction = (data, type, config) => {
    return axios.post("https://lameloapis.herokuapp.com/dashboard", data, config).then(res => {
        if (type == GET_ORDERED) {
            return {
                type: GET_ORDERED,
                data: res.data.ordered,
                customers: res.data.customers
            }
        } else {
            return {
                type: GET_ARCHIVE,
                data: res.data.Archive,
                customers: res.data.customers
            }
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status
        }
    })
}

export const getOrderAndCustomer = (data, config) => {
    return axios.post("https://lameloapis.herokuapp.com/dashboard", data, config).then(res => {
        return {
            type: GET_PRODUCT_AND_CUSTOMER,
            products: res.data.products,
            customer: res.data.customer,
            orderedTopping: res.data.toppings
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
export const addToToppingCart = (data) => {
    return {
        type: ADD_TO_TOPPING_CART,
        data: data
    }
}

export const Updatetoppingcart = (data) => {
    return {
        type: UPDATE_TOPPING_CART,
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
export const success = () => {
    return {
        type: SUCCESS
    }
}
export const AddLogistics = (data) => {
    return {
        type: ADD_LOGISTICS,
        data: data
    }
}
export const AddDestination = (data) => {
        return {
            type: ADD_DESTINATION,
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
        case ADD_TO_TOPPING_CART:
            return {
                ...state,
                toppingcart: [...state.toppingcart, action.data],
                loading: false,
            }
        case UPDATE_CART:
            return {
                ...state,
                cart: [...action.data],
                loading: false,
            }
        case UPDATE_TOPPING_CART:
            return {
                ...state,
                toppingcart: [...action.data],
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
                Ordered: [action.data, ...state.Ordered],
                messages: action.messages,
                success: action.success,
                cart: action.cart,
                toppingcart: action.toppingcart,
                User: action.user,
                logistics: 0,
                destination: "",
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
        case ADD_DESTINATION:
            return {
                ...state,
                destination: action.data,
                loading: false,
            }
        case GET_ORDERED_PRODUCTS:
            return {
                ...state,
                OrderedProduct: action.products,
                orderedTopping: action.orderedTopping,
                loading: false,
            }
        case GET_PRODUCT_AND_CUSTOMER:
            return {
                ...state,
                OrderedProduct: action.products,
                customer: action.customer,
                orderedTopping: action.orderedTopping,
                loading: false,
            }
        case GET_ORDERED:
            return {
                ...state,
                Orders: action.data,
                customers: action.customers,
                loading: false,
            }
        case ADD_NOTIFICATION:
            return {
                ...state,
                notification: [...action.neworder, ...state.notification],
                Orders: action.data,
                customers: action.customers,
                loading: false,
            }
        case GET_ARCHIVE:
            return {
                ...state,
                archive: action.data,
                customers: action.customers,
                loading: false,
            }
        case LOGIN:
            return {
                ...state,
                User: {
                    user: action.data.user,
                    token: action.data.token,
                },
                messages: action.messages,
                Ordered: action.data.ordered,
                logged: true,
                loading: false,

            }
        case LOGOUT:
        case DELETE_USER:
            return {
                ...state,
                logged: false,
                User: "",
                messages: "",
                stores: "",
                Ordered: "",
                OrderedProduct: "",
                Orders: [],
                notification: [],
                archive: [],
                loading: false,
            }
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: false,
                loading: false,
            }
        case SUCCESS:
            return {
                ...state,
                success: true,
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


export const getHours = (time) => {

        let hours = time.slice(0, 2);
        let covHours = parseInt(hours) + 1
        let seconds = time.slice(2, 5);
        let amPM = covHours >= 12 && covHours !== "00" ? "PM" : "AM";
        if (covHours > 12) {
            return covHours - 12 + seconds + " " + amPM
        } else {
            return covHours + " " + amPM
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
                    Orders: [],
                    notification: [],
                    archive: [],
                    customers: [],
                    OrderedProduct: [],
                    orderedTopping: [],
                    loading: true,
                    logged: false,
                    cart: [],
                    toppingcart: [],
                    scrow: window.pageYOffset,
                    width: window.innerWidth,
                    prices: [],
                    locations: [],
                    destination: "",
                    customer: { address: "", email: "", fullName: "", id: "", phoneNumber: "" },
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
                    Orders: [],
                    notification: [],
                    archive: [],
                    customers: [],
                    OrderedProduct: [],
                    orderedTopping: [],
                    loading: true,
                    logged: false,
                    cart: [],
                    toppingcart: [],
                    scrow: window.pageYOffset,
                    width: window.innerWidth,
                    prices: [],
                    locations: [],
                    destination: "",
                    customer: { address: "", email: "", fullName: "", id: "", phoneNumber: "" },
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

    return ( <
        storeContext.Provider value = {
            { storestate, storedispatch, getHours }
        } > { props.children } < /storeContext.Provider>
    )
}
export default StoreContextProvider;