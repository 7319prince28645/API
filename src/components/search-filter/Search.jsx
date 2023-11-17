import { AiOutlineSearch } from "react-icons/ai";
import { useContext} from "react";
import {  MyContext3 } from "../../Services/Service";
function Search() {
  const { handleChange } = useContext(MyContext3);


  return (
    <label htmlFor="search" className="w-full relative sm:w-1/2 lg:w-1/3 shadow">
      <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search for a country..."
        id="search"
        className="pl-10 dark:bg-dark-blue py-2 w-full"
        onChange={handleChange}
      />
      
    </label>
  );
}

export default Search;
