
interface Props{
    onchange: (value:string) => void
    value?:string
    error?:string
    label:string
}

function SelectOp( {onchange,value,error,label}:Props) {
  return (<div className='flex flex-col'>
     <div className="mb-2"> <span className="bg-yellow-300 rounded-sm px-1  ml-2"></span>
        <label className=" text-gray-200 ">{label}</label></div>
      <select  value={value}  onChange={(e)=>onchange(e.target.value)} className=" text-gray-200  p-2 border border-gray-400 bg-slate-700 sm:text-sm font-semibold  hover:border-yellow-300 rounded-md focus:border-yellow-300 focus:outline-0 xl:w-[330px] lg:[200px] w-[100px]" >
    <option  value="" > ژانر</option>
    <option  value="درام"> درام</option>
    <option value="هیجانی"> هیجانی</option>
    <option value="کمدی"> کمدی</option>
    <option value="ترسناک"> ترسناک</option>
   </select>
   <span className='text-red-300 mt-2' >{error}</span>
  </div>
 
  )
}

export default SelectOp