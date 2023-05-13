export const movieNameValidation = (value: string): string => {
    let valid=false
    if(value.length>2 ){valid=true}
     return valid ? '' :'نام فیلم را وارد کنید';
  };


  export const   movieGenreValidation = (value: string): string => {
    let valid=true
    console.log(value);
    
    if(value==="ژانر"){valid=false}
     return valid ? '' : 'ژانر فیلم را وارد کنید';
  };


  export const movieDirectorValidation = (value: string): string => {

    
    let valid=false
    if(value.length>2 ){valid=true}
     return valid ? '' : 'نام کارگردان فیلم را  بنویسید';
  };


  export const movieYearValidation = (value: string): string => {
  
   let valid=false
   if(value.length>2 ){valid=true}
    return valid ? '' : 'سال ساخت فیلم را وارد کنید';
  };

  export const movieDescriptionValidation = (value: string): string => {
    let valid=false
    if(value.length>10 ){valid=true}
     return valid ? '' : 'توضیحی راجع به  فیلم   بنویسید';
  };
  

