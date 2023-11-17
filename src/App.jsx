import "./index.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SearchFilter from "./components/SearchFilter";
import {
  Service,
  SearchFilterCountries,
  Search,
  ChooseUrl,
} from "./Services/Service";

function App() {
  return (
    
    <ChooseUrl>
      <Service>
        <Search>
          <SearchFilterCountries>
            <Nav />
            <SearchFilter />
            <Main />
          </SearchFilterCountries>
        </Search>
      </Service>
    </ChooseUrl>
  );
}

export default App;
