import addItem from "./additem";
import {combineReducers} from "redux"
import singleItem from "./singleItem";

const rootReducers = combineReducers({
    product: addItem,
    singleProduct: singleItem
})

export default rootReducers