import { useEffect, useState } from "react";
import { UseMovie } from "../../../hook/useMovie";
import { movieDescriptionValidation, movieDirectorValidation, movieGenreValidation, movieNameValidation, movieYearValidation } from "../../../lib/validation";
import Button from "../../button"
import FormInput from "../../input"
import Post from "../../../instance/post";
import { UseData } from "../../../hook/useData";
import Put from "../../../instance/put";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectOp from "../../selectOp";




function Header() {
    const { state, dispatch } = UseMovie();
    const {stateData , dispatchData}=UseData()
      const allErrorEmpty = Object.values(state.error).every((value) => value === '');
      const allّInputEmpty = Object.values(state.movie).every((value) => value !== '');

    const submitData =(e:any)=>{
      e.preventDefault();
   
      dispatch({
        type:"is-edit",  
        payload:true
         
    })
      
      dispatch({
        type:"add-movie",
        payload:{
          movie:{
            ...state.movie,  
           
          },
          error:{
            nameError:movieNameValidation(state.movie.movieName),
            genreError: movieGenreValidation(state.movie.movieGenre),
            directorError: movieDirectorValidation(state.movie.movieDirector),
            yearError: movieYearValidation(state.movie.movieYear),
            descriptionError: movieDescriptionValidation(state.movie.movieDescription)

          }
        }
      })
      allErrorEmpty&& allّInputEmpty&&(stateData.isEdit && Post(state.movie) 
       , dispatch({type:"reset-state" }),notify("فیلم شما با موفقیت ذخیره شد 😊") ,
       dispatch({
        type:"render-ui",
        payload:!state.renderUi
       })
       ) 
      !stateData.isEdit && Put(state.movie)
      !allErrorEmpty&& !allّInputEmpty && notify("اطلاعات رو کامل وارد کنید😊")
      
      !stateData.isEdit&& notify("فیلم شما با موفقیت اصلاح شد 😊")
      }
    const handleButton=()=>{
      dispatch({type:"reset-state" })
      
    }
   const notify = (massage) => toast(massage);
   

  return (
    <form onSubmit={(e)=>submitData(e)} className="container p-16 flex gap-10">
    
        <div className=" flex w-7/12 gap-12 flex-wrap">
        <FormInput
        value={state.movie.movieName} 
         setInput={(value : string)=>{
         dispatch({
          type:"add-movie",
          payload:{
            movie:{
              ...state.movie,  
              movieName:value
            },
            error:{
              ...state.error,
              nameError:movieNameValidation(state.movie.movieName)
              
            }
      
          }}) }} 
        variant="smallInput" 
        placeHolder="نام فیلم را بنویسید" 
        error={state.error.nameError}
        label="نام فیلم"/>
  
        <SelectOp 
        value={state.movie.movieGenre} 
          onchange={(value: any)=>{
         dispatch({
          type:"add-movie",
          payload:{
            movie:{
              ...state.movie,
              movieGenre:value

            },
            error:{
              ...state.error,
              genreError: movieGenreValidation(state.movie.movieGenre)
            }
       
          }}) }}  
         
          error={state.error.genreError}
         
            label="ژانر فیلم"/>
        <FormInput
         value={state.movie.movieDirector} 
         variant="smallInput"
          setInput={(value : string)=>{
         dispatch({
          type:"add-movie",
          payload:{
            movie:{
              ...state.movie,
              movieDirector:value
            },
            error:{
              ...state.error,
              directorError: movieDirectorValidation(state.movie.movieDirector)
            }
       
       
          }}) }}  
           placeHolder="نام کارگردان را وارد کنید"
           error={state.error.directorError}
            label=" کارگردان"/>

        <FormInput
         value={state.movie.movieYear}  
         variant="smallInput"
          setInput={(value : string)=>{
         dispatch({
          type:"add-movie",
          payload:{
            movie:{
              ...state.movie,
              movieYear:value
            },
            error:{
              ...state.error,
              yearError: movieYearValidation(state.movie.movieYear)
            }
      
          }}) }} 
          error={state.error.yearError}
           placeHolder="  سال ساخت فیلم را وارد کنید "
            label=" سال تولید"/>
        </div>
        <div >
        <FormInput
       value={state.movie.movieDescription}
          variant="bigInput" 
          setInput={(value : string)=>{
         dispatch({
          type:"add-movie",
          payload:{
         movie:{ ...state.movie,
              movieDescription:value
          },
          error:{
            ...state.error,
            descriptionError: movieDescriptionValidation(state.movie.movieDescription)
          }
      
          }}) }} 
          error={state.error.descriptionError}
           placeHolder="   توضیحات درباره فیلم" 
           label="توضیحات "/>
        <div className="flex gap-10 justify-end mt-5">
            <Button type={"submit"} id="save" children={stateData.isEdit?"ذخیره":"اصلاح"} variant="save"/>
            <span onClick={()=>handleButton()} className=   "  cursor-pointer bg-slate-700 border border-slate-400 text-slate-300 rounded-md px-5 lg:px-10 py-2">انصراف</span>
        </div>
        </div>
        <ToastContainer
position="top-right"
autoClose={600}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </form>
  )
}

export default Header