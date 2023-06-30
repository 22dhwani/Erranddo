import "../../styles/Input.css";

const Input = ({ ...props }) => {
  const inputClassName = `flex  items-center w-full   text-md   font-sans placeholder:font-sans text-textColor px-2 my-1    focus:ring-0 focus:border focus:border-slate-100  md:mx-0   border rounded-lg    dark:bg-black  ${props.className}`;
  return (
    <div className={inputClassName}>
      {props.icon && <img src={props.icon} className="mr-3" />}
      <input
        {...props}
        className={`!h-full focus:outline-none tracking-wide  w-full  ease-in  dark:text-white placeholder:text-slate-400 placeholder:text-md  py-3 ${
          props.disabled
            ? "cursor-not-allowed bg-transparent"
            : "cursor-text bg-transparent"
        }`}
      />
    </div>
  );
};

export default Input;
