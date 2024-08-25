/* eslint-disable react/prop-types */
import { createContext , useState } from "react";
export const SimpleContext = createContext();

export const SimpleProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count+1);
  }

  const downCount = () => {
    setCount(count-1);
  }

  return (
    <SimpleContext.Provider value={{count,upCount,downCount}}>
      {children}
    </SimpleContext.Provider>
  );
};