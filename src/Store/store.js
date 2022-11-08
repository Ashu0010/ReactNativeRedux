import { legacy_createStore } from "redux";
import {todoReducer} from "../Reducers/ToDoReducer";



const store = legacy_createStore(todoReducer);
export default store;