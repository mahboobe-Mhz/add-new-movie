
interface Props{
    label:string
    value?:string
    placeHolder: string
    setInput: (value:string) => void
    variant:string
    error?:string

}
const variants :Record<string, string> ={
  bigInput:"p-2  text-gray-200  border border-gray-400 bg-slate-700 sm:text-sm  font-semibold  hover:border-yellow-300 rounded-md focus:border-yellow-300 focus:outline-0 xl:h-[100px] h-[60px] xl:w-[600px] w-[200px]",
  smallInput:" p-2  text-gray-200  border border-gray-400 bg-slate-700 sm:text-sm font-semibold  hover:border-yellow-300 rounded-md focus:border-yellow-300 focus:outline-0 xl:w-[330px] lg:[200px] w-[100px]",
}
function FormInput({label,value,placeHolder, setInput, error , variant}:Props) {
  return (
    <div className="flex flex-col">
      <div className="mb-2"> <span className="bg-yellow-300 rounded-sm px-1  ml-2"></span>
        <label className=" text-gray-200 ">{label}</label></div>
        <input
         type="text"
         value={value}
         onChange={(e) => setInput(e.target.value)}
         className={`${variants[variant]}`}
         placeholder={placeHolder}
         />
         <span className="text-red-300 mt-2">{error}</span>

    </div>
  )
}

export default FormInput