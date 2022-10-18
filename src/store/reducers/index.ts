import { combineReducers } from "redux";
import { todoReducers } from "./todoReducers";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducers,
})

export type RootState = ReturnType<typeof rootReducer>