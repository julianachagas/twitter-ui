import { NavLink } from 'react-router-dom';
import logo from '../assets/twitter-logo.svg';
import {
  House,
  Hash,
  Bell,
  EnvelopeSimple,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from 'phosphor-react';
import { StyledSidebar } from './styles/Sidebar.styled';
import { StyledButton } from './styles/Button.styled';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <img src={logo} alt="" width="32" height="32" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              <House />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <Hash />
              <span>Explore</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Bell />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="#">
              <EnvelopeSimple />
              <span>Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BookmarkSimple />
              <span>Bookmarks</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FileText />
              <span>Lists</span>
            </a>
          </li>
          <li>
            <a href="#">
              <User />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <DotsThreeCircle />
              <span>More</span>
            </a>
          </li>
        </ul>
      </nav>
      <StyledButton aria-label="Tweet">
        <Pencil />
        <span>Tweet</span>
      </StyledButton>
    </StyledSidebar>
  );
};
