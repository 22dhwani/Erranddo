import { useState } from "react";
import Search from "../../../assets/search.svg";

const SearchBar = (props: { onChange: (key: string) => void }) => {
  const [searchKey, setSearchKey] = useState("");
  const searchHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    props.onChange(searchKey);
  };
  const searchBarClass =
    "flex items-center md:w-96 lg:w-80 xl:w-96 xs:w-full text-md  font-semibold font-sans text-textColor bg-white px-2 my-3 py-2  hover:border-[0.3px] hover:border-gray-400 rounded-xl drop-shadow-sm    ease-in focus:caret-slate-500  lg:mr-3  ";
  return (
    <form className="">
      <div className={`${searchBarClass} xl:h-12 lg:h-10 xs:h-10 !box-border`}>
        <button onClick={searchHandler} className="mr-3">
          <img src={Search} className="w-6 h-6" />
        </button>
        <input
          placeholder="Search"
          className="focus:outline-none w-full placeholder:text-md placeholder:font-normal  bg-white"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchKey(event.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
