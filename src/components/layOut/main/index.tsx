import { useEffect, useState } from 'react';
import { UseData } from '../../../hook/useData';
import Button from '../../button';
import { get } from '../../../instance/get';
import BasicModal from '../../modal';
import { Delete } from '../../../instance/Delete';
import { UseMovie } from '../../../hook/useMovie';
import { MovieInterface } from '../../../interface/movieInterface';
import SelectOp from '../../selectOp';
import FormInput from '../../input';
import axios from 'axios';
import { debounce } from '@mui/material';
import _ from 'lodash'





function Main() {

const[modalData, setModalData]=useState()

const { state, dispatch } = UseMovie();
const [open, setOpen] =useState(false);
 const{stateData ,dispatchData}=UseData()
 const[searchData ,setSearchData]=useState("")
 useEffect(()=>{

    get().then(res =>{ 

        dispatchData({
        type:"add-data",
        payload:res.data
                  })})
 },[state.renderUi])
 
const handleModal=(data:any)=>{
  
    setModalData(data.movieDescription)   
    setOpen(true);
}

const handleClose = () => setOpen(false);
const handleDelete =(dataId:number)=>{
       Delete(dataId)  
       dispatch({
        type:"render-ui",
        payload:!state.renderUi
       })
}
const handleEdit=(selectData:MovieInterface)=>{   
    dispatch({
        type:"add-movie",
        payload:{
            ...state,
       movie:{ 
        id:selectData.id,
        movieName:selectData.movieName,
        movieGenre:selectData.movieGenre,
        movieDirector:selectData.movieDirector,
        movieYear:selectData.movieYear,
         movieDescription:selectData.movieDescription
        }}})

        dispatchData({
            type:"is-edit",  
            payload:false
             
        }) 
}
     useEffect(() => {
        const delaySearch=_.debounce(()=>{
            axios.get(`http://localhost:3000/movie?q=${searchData}`).then(res =>{ 
                dispatchData({
                type:"add-data",
                payload:res.data
                          })}), 
       1000 })
       delaySearch()
        }, [searchData]);


  return (
    <div className='pr-20 pt-10 pl-10 pb-10 '>
        <div className='flex gap-5'>   <SelectOp label='فیلتر' onchange={setSearchData}/> <FormInput variant="smallInput" setInput={setSearchData} placeHolder='جستجو ...' label='سرچ کنید'/> </div>
      
       <BasicModal modalData={modalData} open={open} handleClose={handleClose} />
        <div>
            <span className='px-1 py-1 bg-yellow-300  rounded-sm'> </span>
            <span className=' mr-2 text-xl text-gray-200 font-semibold'> لیست فیلم</span>
        </div>
        <table className=' text-gray-200 mt-7 w-full container' >
            <thead className=' border-b-2  '>
                <tr className='text-right '>
                    <th  className=' pb-5 ' > ردیف</th>
                    <th  className=' pb-5 '> نام فیلم </th>
                    <th  className=' pb-5 hidden md:table-cell'> کارگردان </th>
                    <th  className=' pb-5 hidden md:table-cell'> ژانر فیلم</th>
                    <th  className=' pb-5 hidden md:table-cell'> سال ساخت </th>
                    <th  className=' pb-5 '> توضیحات </th>
                    <th  className=' pb-5 ' > حذف</th>
                    <th  className=' pb-5 ' > تصحیح</th>
                </tr>
            </thead>
            <tbody className=''>
              
                {
               
               stateData.data &&  stateData.data.map(( item ,index) =>{
                        return(<tr className=' pt-5 pr-5 pl-20 ' key={item.id}>
                    <td className=' pt-5 '>{index+1}</td>
                   <td  className=' pt-5 '>{item.movieName}</td>
                   <td  className=' pt-5 hidden md:table-cell'>{item.movieDirector}</td>
                   <td  className=' pt-5 hidden md:table-cell'>{item.movieGenre}</td>    
                   <td  className=' pt-5 hidden md:table-cell'>{item.movieYear}</td>
                   <td  className=' pt-5 '>{<Button variant='description' onClick={()=>{handleModal(item)}} children='توضیحات'/>}</td>
                   <td  className=' pt-5 '>{<Button variant='delete' onClick={()=>{handleDelete(item.id)}}  children='حذف'/>}</td>
                   <td  className=' pt-5 '> {<Button variant='edit' onClick={()=>{handleEdit(item)}} children='تصحیح'/>}</td>
                  </tr> ) 
                })  
      
                }
              
            </tbody>
        </table>
    </div>
  )
}

export default Main