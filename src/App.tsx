import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { darkTheme, lightTheme } from './styles/themes';
import { RootLayout } from './layouts/RootLayout';
import { useGlobalContext } from './context/GlobalProvider';

function App() {
  const { theme, setTheme } = useGlobalContext();

  React.useEffect(() => {
    // check if there's a theme in local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) setTheme(storedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <RootLayout />
    </ThemeProvider>
  );
}

export default App;
