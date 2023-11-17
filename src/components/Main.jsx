import React, { useContext } from "react";
import { MyContext, MyContext2 } from "../Services/Service";
function Main() {
  const { countries } = useContext(MyContext);
  const { filteredCountries } = useContext(MyContext2);

  const show = filteredCountries.length > 0 ? filteredCountries : countries;
  return (
    <section className="grid grid-cols-auto-fit gap-8 lg:gap-12 mx-8 lg:mx-16">
      {show.slice(0, 50).map((country, index) => {
            return (
              <article key={index} className="dark:bg-dark-blue shadow-md">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="w-full h-48"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold pb-2">
                    {country.name.common.toUpperCase()}
                  </h2>
                  <p>
                    <strong>Population:</strong> {country.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
              </article>
            );
          })
      }
        
    </section>
  );
}

export default Main;
