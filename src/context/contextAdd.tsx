import { errorInterface, MovieInterface } from "../interface/movieInterface"
import {createContext, ReactNode, useReducer} from "react";

interface StateType{
    movie: MovieInterface
    error:errorInterface
    renderUi:boolean

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
    movie:{
        id:0,
        movieName:"",
        movieGenre:"",
        movieDirector:"",
        movieYear:"",
        movieDescription:""
    },
    error:{
       nameError:"",
       genreError:"",
       directorError:"",
       yearError:"",
       descriptionError:"" 
    },
 
    renderUi:true
  
        
}
const Reducer=(state:StateType,action:ActionType)=>{
    switch(action.type){
        case 'add-movie':
            return{
                ...state,
                movie:action.payload.movie,
                error:action.payload.error
            }
        case 'reset-state':
            return{
                ...state,
                movie:initialState.movie
            }
            case "render-ui":
                return{
                    ...state,
                    renderUi:action.payload
                }
        
       
          default:
            return{state}

    }
}
export const movieContext = createContext<ContextType|[]>([])
export const MovieProvider =({children}: Props)=>{
    const [state, dispatch] = useReducer(Reducer, initialState, undefined)
    return (
        <movieContext.Provider value={{state, dispatch}}>
            {children}
        </movieContext.Provider>
    );
}