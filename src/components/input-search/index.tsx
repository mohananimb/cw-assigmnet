/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { ChangeEvent, InputHTMLAttributes, useCallback, useState } from "react";
import { debounce } from "../../helpers/debounce";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  handleSearch: (val: string) => void;
  searchedValue?: string;
  searchPlaceholder?: string;
}

const SearchFilter: React.FC<IProps> = ({ handleSearch, searchPlaceholder = "Search" }) => {
  const [value, setValue] = useState("");

  const setSearchText = useCallback(
    debounce((searchValue: string) => {
      handleSearch(searchValue);
    }, 600),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSearchText(e.target.value);
  };
  return (
    <input
      className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      value={value || ""}
      placeholder={searchPlaceholder}
      type="text"
      onChange={handleChange}
    />
  );
};

export default SearchFilter;
