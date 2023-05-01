import { StyledHeader } from './styles/Header.styled';
import { Sparkle } from 'phosphor-react';
import { useGlobalContext } from '../context/GlobalProvider';

interface HeaderProps {
  title: string;
  themeBtn?: boolean;
}

export const Header = ({ title, themeBtn }: HeaderProps) => {
  const { theme, setTheme } = useGlobalContext();
  function handleClick() {
    const selectedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  }
  return (
    <StyledHeader>
      <h1>{title}</h1>
      {themeBtn && (
        <button
          onClick={handleClick}
          aria-label="Switch to the dark theme"
          aria-pressed={theme === 'light' ? 'false' : 'true'}
        >
          <Sparkle size={24} />
        </button>
      )}
    </StyledHeader>
  );
};
