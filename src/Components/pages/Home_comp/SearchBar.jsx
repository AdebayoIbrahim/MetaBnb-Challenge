import React, { useState } from "react";
import { Button } from "../../Nav/NavBarStyle";

const SearchBar = () => {
  const [btnValue, setbtnValue] = useState("Search");
  return (
    <>
      <form action="#">
        <input type="text" name="search" placeholder="Search For Location" />
      </form>
      <Button state="search">{btnValue}</Button>
    </>
  );
};
export default SearchBar;
