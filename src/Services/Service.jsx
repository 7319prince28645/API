import React, { useState, useEffect, useContext } from "react";

export const MyContext = React.createContext();
export const Service = ({ children }) => {
  const { url } = useContext(MyContext4);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    };
    getData();
    console.log(url);
  }, [url]);

  return (
    <MyContext.Provider value={{ countries }}>{children}</MyContext.Provider>
  );
};

export const MyContext2 = React.createContext();
export const SearchFilterCountries = ({ children }) => {
  const { countries } = useContext(MyContext);
  const { search } = useContext(MyContext3);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (!search) {
      setFilteredCountries(countries);
      return;
    }
    setFilteredCountries(
      countries.filter((country) => {
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);

  return (
    <MyContext2.Provider value={{ filteredCountries }}>
      {children}
    </MyContext2.Provider>
  );
};

export const MyContext3 = React.createContext();
export const Search = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <MyContext3.Provider value={{ search, handleChange }}>
      {children}
    </MyContext3.Provider>
  );
};

export const MyContext4 = React.createContext();

export const ChooseUrl = ({ children }) => {
  const [filter, setFilter] = useState("");
  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };
  const setUrl = {
    url: "https://restcountries.com/v3.1/all",
    africa: "https://restcountries.com/v3.1/region/africa",
    americas: "https://restcountries.com/v3.1/region/americas",
    asia: "https://restcountries.com/v3.1/region/asia",
    europe: "https://restcountries.com/v3.1/region/europe",
    oceania: "https://restcountries.com/v3.1/region/oceania",
  };
  
  const url = filter ? setUrl[filter] : setUrl.url;
  return (
    <MyContext4.Provider value={{ url, handleChangeFilter }}>
      {children}
      
    </MyContext4.Provider>
  );
};
