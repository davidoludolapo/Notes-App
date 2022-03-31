import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <input
        className="form-control w-25"
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
}
