import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  video,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const SignupButton = () => {
    return (
      <>
        <Link to="/sign-up" className="btn-mobile">
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </Link>
      </>
    );
  };

  const VideoButton = () => {
    return (
      <>
        <a href="https://youtu.be/Lz3m4BI1EfY" className="btn-mobile">
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </a>
      </>
    );
  };

  return <>{video ? <VideoButton /> : <SignupButton />}</>;
};
