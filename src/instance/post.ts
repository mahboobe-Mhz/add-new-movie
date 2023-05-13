import { MovieInterface } from './../interface/movieInterface';
import axios from "axios"
interface Props{
  data:MovieInterface
}

async function Post(data:Props) {
  try{
   await axios
    .post("http://localhost:3000/movie", data)
  }catch(error:any){
    console.error(error.response); 
  }

}

export default Post
