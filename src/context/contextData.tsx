import axios from "axios";
import { MovieInterface } from "../interface/movieInterface"
import {createContext, ReactNode, useReducer} from "react";
import Put from "../instance/put";
import { get } from "../instance/get";
interface StateType{
    data:[]
    isEdit:boolean
  
}
interface ActionType {
    type: string
    payload: StateType
}
interface ContextType {
    state: StateType,
    dispatch: (x: StateType) => void
}
interface Props{
    children: ReactNode  
  
}
const initialState :StateType={
    data:[],
    isEdit:true,




}

const Reducer=(stateData:StateType,action:ActionType)=>{
    switch(action.type){
        case "add-data":
            return{
                ...stateData,
                data:action.payload
            }
    
      case "is-edit":   
        return{
            ...stateData,
            isEdit:action.payload
        }
   
    }

}
export const DataContext = createContext<ContextType|[]>([])
export const DataProvider =({children}:Props)=>{
    const [stateData, dispatchData] = useReducer(Reducer, initialState, undefined)
    return(
        <DataContext.Provider value={{stateData, dispatchData}}>
            {children}
        </DataContext.Provider>
    );
}