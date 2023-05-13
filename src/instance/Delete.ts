import axios from "axios";

export async function Delete(params:any) {
    await axios.delete(`http://localhost:3000/movie/${params}`)
    
} 