import React from "react";

import SpotifyLogo from '../assets/spotify-logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={SpotifyLogo} alt="Spotify Logo" className="header-logo" />
    </header>
  );
};

export default Header;
