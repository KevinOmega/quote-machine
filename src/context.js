import React, { useCallback, useContext, useEffect, useState } from "react";
import { colors } from "./colors";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [color, setColor] = useState(["#fd7c54"]);
  const [list, setList] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});

  const random = (array) => {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  };

  const changeQuote = () => {
    setColor(random(colors));
    setCurrentQuote(random(list));
  };

  const fetchList = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { quotes } = data;
    setCurrentQuote(random(quotes));
    setList(quotes);
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <AppContext.Provider value={{ color, currentQuote, changeQuote }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
