import axios from "axios"

export  const get= async ()=>{
   const  res = await axios.get('http://localhost:3000/movie')
   return res
}