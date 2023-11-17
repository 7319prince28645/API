import { MyContext4 } from "../../Services/Service";
import { useContext } from "react";
function Filter() {
  const { handleChangeFilter } = useContext(MyContext4);
  return (
    <select
      name="filter"
      id="filter"
      className="dark:bg-dark-blue sm:w-1/4 lg:w-1/5 pl-4 shadow w-full py-3 sm:py-0"
      onChange={handleChangeFilter}
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default Filter;

