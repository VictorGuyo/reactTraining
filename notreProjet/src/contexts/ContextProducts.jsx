import React, { createContext, useContext, useState, useMemo } from "react";

const UseProducts = createContext();

function ContextProducts({ children }) {
  const [id, setId] = useState(null);
  const [category, setCategory] = useState([]);
  const [resetFilter, setResetFilter] = useState([]);

  const productExport = useMemo(() => ({ category, setCategory, id, setId, resetFilter, setResetFilter }));
  return (
    <UseProducts.Provider value={productExport}>
      {children}
    </UseProducts.Provider>
  );
}

export default ContextProducts;
export const useApi = () => useContext(UseProducts);
