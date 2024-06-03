import React,{createContext,useState} from "react";
// New context for the cart
export const CartContext = createContext();
// Definition of CartProvider component, which will wrap around any component that needs access to the cart context
export const CartProvider = ({children})=>{
    //useState hook to mange the state of the cart items
    const [cart,setCart] = useState([]);

    //Function to add an item to the cart
    const addToCart = (item)=>{
        //check if the item is already in the cart
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem){
            //If item exists, increase its quantity
            setCart(cart.map(cartItem=>
                cartItem.id === item.id ? {...cartItem, quantity:cartItem.quantity + 1}: cartItem
            ));
        }else{
            //if item does not exist, add it to the cart with quantity 1
            setCart([...cart,{...item,quantity:1}]);
        }
    };
    //Function to increase the quantity of an item in the cart
    const incrementQuantity = (item)=>{
        setCart(cart.map(cartItem=>
            cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity + 1}: cartItem 
        ));
    };
    // Function to decrease the quantitiy of an item in the cart
    const decrementQuantity=(item)=>{
        if (item.quantity >1){
            //If quantity is more than 1, decrease it
            setCart(cart.map(cartItem=>
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1}: cartItem
            ));
        }else{
            //If quantity is 1, remove the item from the cart
            removeFromCart(item);
        }
    };
    // function to remvoe an item from the cart
    const removeFromCart = (item)=>{
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
    };
    // Function to clear all items from the cart
    const clearCart=()=>{
        setCart([]);
    };
    //Provide the cart state and actions to the components wrapped by Cartprovider
    return(
        <CartContext.Provider value={{cart,addToCart,incrementQuantity,decrementQuantity,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    );
};