import { combineReducers } from "redux";
import warehouseDataReducer from "./warehouseData";
import searchByWarehouseReducer from "./searchByWarehouse";
import searchByNameReducer from "./searchByName";
import searchByFilterReducer from "./searchByFilter";

//main reducer of the App
const rootReducer = combineReducers({
  warehouseData: warehouseDataReducer,
  searchByWarehouse: searchByWarehouseReducer,
  searchByName: searchByNameReducer,
  searchByFilter: searchByFilterReducer,
});

export default rootReducer;
