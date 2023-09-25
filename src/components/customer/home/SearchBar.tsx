import { useEffect, useState } from "react";
import Search from "../../../assets/search.tsx";
import { useTheme } from "../../../store/theme-context";

const SearchBar = (props: { onChange: (key: string) => void; key: string }) => {
  const [searchKey, setSearchKey] = useState("");
  const searchHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    props.onChange(searchKey);
  };

  useEffect(() => {
    return () => {
      setSearchKey("");
    };
  }, []);
  const { theme } = useTheme();

  const searchBarClass =
    "flex items-center md:w-96 lg:w-80 xl:w-96 xs:w-full text-md  font-semibold font-poppins text-textColor dark:bg-black bg-white px-2 my-3 py-2  hover:ring-1 hover:ring-gray-400 rounded-xl drop-shadow-sm    ease-in focus:caret-slate-500  lg:mr-3  ";
  return (
    <form className="">
      <div className="flex items-center gap-2">
        <div
          className={`${searchBarClass} xl:h-12 lg:h-10 xs:h-10 !box-border`}
        >
          <button className="mr-3">
            {theme === "light" && (
              <div className="ml-3" children={<Search color="black" />} />
            )}

            {theme === "dark" && (
              <div className="ml-3" children={<Search color="white" />} />
            )}
          </button>
          <input
            value={`${
              localStorage.getItem("service")
                ? JSON.parse(localStorage.getItem("service") ?? "").name
                : searchKey
            }`}
            placeholder={`${localStorage.getItem("service") ?? "Search"}`}
            className="focus:outline-none w-full placeholder:text-md placeholder:font-normal  bg-white dark:text-white dark:bg-black dark:placeholder:text-white"
            onChange={(event: any) => {
              setSearchKey(event.target.value);
              searchHandler(event);
            }}
          />
        </div>
        <button
          type="button"
          onClick={searchHandler}
          className="text-white bg-primaryBlue hover:bg-blue-800  focus:outline-none  xl:text-lg md:text-sm rounded-lg xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-primaryBlue dark:hover:bg-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
