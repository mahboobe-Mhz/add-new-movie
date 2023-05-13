
import { useState } from 'react'
import Header from '../header'
import Main from '../main'


function Container() {


  return (
    <div className='w-full h-screen bg-slate-600'>
        <div className=' h-20 w-full bg-yellow-300 '></div>
        <div className=' bg-slate-700  w-full'> 
            <Header />       
        </div>
        <div className='bg-slate-600'>  
      <Main />
        </div>
    </div>
  )
}

export default Container