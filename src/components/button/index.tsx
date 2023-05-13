import {ReactNode} from "react";

const variants: Record<string, string> = {
  save: "bg-yellow-300 rounded-md flex items-center px-5 py-2 lg:px-10 ",
 cancel: "bg-slate-700 border border-slate-400 text-slate-300 rounded-md px-5 gl:px-10 py-2",
 description:" border border-blue-400 text-slate-300 rounded-md px-5 lg:px-10  py-2",
 delete:" border border-red-400 text-slate-300 rounded-md px-5 lg:px-10  py-2",
 edit:" border border-green-400 text-slate-300 rounded-md px-5 lg:px-10  py-2"
}

type buttonProps = {
  variant: string,
  classes?: string,
  onClick?: () => void;
  children?:string
  type?:string
  id?:string
}

const Button = ({variant, classes, onClick, children,id,type}: buttonProps) => {
  return (
    <button type={type} id={id} className={`${variants[variant]} ${classes}`} onClick={(e) => {
      onClick && onClick(e);
    }
    }>
      {
        children
      }
    </button>
  );
};

export default Button;