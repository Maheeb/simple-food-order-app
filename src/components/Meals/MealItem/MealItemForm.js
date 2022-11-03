import classes from "./MealItemForm.module.css";
import Input from "../../Ui/Input";

const MealItemForm =(props) => {
    return(
        <from className={classes.form}>
            <Input label="Amount" input={{id: 'amount_' + props.id,type:'number',min:'1',max:'5',step:'3',defaultValue:'1'}}></Input>
            <button>+ Add</button>
        </from>
    )

}
export default MealItemForm