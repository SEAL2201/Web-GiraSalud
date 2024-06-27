// Button.js
import React from 'react';
import { Link } from 'react-scroll';
import styles from './NavBar.module.css';

const Button = ({ onClick, to, smooth, duration, className, children }) => (
  <Link
    onClick={onClick}
    to={to}
    smooth={smooth}
    duration={duration}
    className={`${styles.contactLink} ${className}`}
  >
    {children}
  </Link>
);

export default Button;
