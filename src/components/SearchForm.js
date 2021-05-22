import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchItem(searchValue.current.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleChange}>
        <div className="form-control">
          {/* <label htmlFor="name">Search Your Favourite Cocktail</label> */}
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            autocomplete="off"
            placeholder="Search Your Favourite Cocktail..."
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
