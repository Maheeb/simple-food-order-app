import classes from "./Cart.module.css";
import Modal from "../Ui/Modal";

const Cart=(props)=>{
    const cartItems =<ul className={classes['cartItems']}>{[{id:'c1',name:'Sushi',amount:'2',price:'12.99'}]
        .map(item=><li>{item.name}</li>)}</ul>;
    return(

        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['buttonAlt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )

}
export default Cart;