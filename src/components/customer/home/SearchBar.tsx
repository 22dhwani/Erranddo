import { useState } from "react";
import Search from "../../../assets/search.svg";

const SearchBar = (props: { onChange: (key: string) => void }) => {
  const [searchKey, setSearchKey] = useState("");
  const searchHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("here");
    event.preventDefault();
    console.log(searchKey);
    props.onChange(searchKey);
  };

  const searchBarClass =
    "flex items-center md:w-96 lg:w-80 xl:w-96 xs:w-full text-md  font-semibold font-sans text-textColor bg-white px-2 my-3 py-2  hover:border-[0.3px] hover:border-gray-400 rounded-xl drop-shadow-sm    ease-in focus:caret-slate-500  lg:mr-3  ";
  return (
    <form className="">
      <div className="flex items-center gap-2">
        <div className={`${searchBarClass} xl:h-12 lg:h-10 xs:h-10 !box-border`}>
          <button className="mr-3">
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
        <button
          type="button"
          // onClick={() => setOpenSearch(true)}
          onClick={searchHandler}
          className="text-white bg-[#0003FF] hover:bg-blue-800  focus:outline-none  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
