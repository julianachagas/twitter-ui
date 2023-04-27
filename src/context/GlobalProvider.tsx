import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { data } from '../data';

interface Props {
  children?: ReactNode;
}

// create a context object
// default value: empty object, type: type of the return of the function
const GlobalContext = createContext(
  {} as ReturnType<typeof usePassedDownValues>,
);

// display the name of the context instead of Context.provider in the Chrome React DevTools
GlobalContext.displayName = 'GlobalContext';

// custom hook to consume the context inside a component
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

// create values that will be passed to the child components
const usePassedDownValues = () => {
  const [theme, setTheme] = useState('light');
  const [tweets, setTweets] = useState(data);
  const globalObject = useMemo(() => {
    return { theme, setTheme, tweets, setTweets };
  }, [tweets, setTweets, theme, setTheme]);

  return globalObject;
};

// provide the created context to the child components
const GlobalProvider = ({ children }: Props) => {
  return (
    <GlobalContext.Provider value={usePassedDownValues()}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
