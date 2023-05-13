import axios from "axios"

async function Put(data) {
    console.log(data);
    
    try{
     await axios
      .put(`http://localhost:3000/movie/${data.id}`, data)
    }catch(error:any){
      console.error(error.response); 
    }
  
  }
  
  export default Put