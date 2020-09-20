import React, {
    useEffect,
    createContext,
    useReducer
} from 'react';


//Action Types
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART";
export const LOADED = "LOADED";
export const LOADING = "LOADING";


//Capitalise first word
// const sentenceCase = (data) => {
//     let firstWord = data.slice(0, 1).toUpperCase()
//     let rest = data.slice(1).toLowerCase()
//     return `${firstWord}${rest}`
// }

//Actions dispatchers
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
                        User: "",
                        Ordered: [],
                        OrderedProduct: [],
                        loading: true,
                        cart: [],
                        prices: [],
                        store: [],
                        ...jsonify,
                        message: "",
                        status: "",
                        messages: "",
                        check: "",
                    }
                } else {
                    finaldata = {
                        User: "",
                        Ordered: [],
                        OrderedProduct: [],
                        loading: true,
                        cart: [],
                        prices: [],
                        store: [],
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

        return ( < storeContext.Provider value = {
                {
                    storestate,
                    storedispatch
                }
            } > {
                props.children
            } < /storeContext.Provider>);
        }


        export default StoreContextProvider;