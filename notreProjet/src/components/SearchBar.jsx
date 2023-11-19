import React, { useEffect } from "react";
export default function SearchBar({ searchTerm, setSearchTerm }) {

    const handleSearch = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
    };

     
  return (
    <div>
      <input
        type="text"
        placeholder="Cherchez votre article"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
