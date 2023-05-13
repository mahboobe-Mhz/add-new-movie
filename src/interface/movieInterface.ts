export interface MovieInterface{
    id:number
   movieName:string
   movieGenre:string 
   movieDirector:string
   movieYear:string
    movieDescription:string

}

export interface ToastData{
    message:string
    type:string
}
export interface errorInterface{
    nameError:string
    genreError:string
    directorError:string
    yearError:string
    descriptionError:string 
}