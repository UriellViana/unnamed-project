import React from 'react';

import NavBar from '../components/NavBar';

const NavBarContainer: React.FC = () => {
  const username = 'Julio Cezar';
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const openMenu = Boolean(menuAnchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;
    if (id === 'config') {
      setMenuAnchorEl(null);
      console.log('entrar em config');
      return;
    }
    if (id === 'logout') {
      setMenuAnchorEl(null);
      console.log('sair');
      return;
    }
    setMenuAnchorEl(null);
  };

  return (
    <NavBar
      {...{ username, handleMenu, handleClose, openMenu, menuAnchorEl }}
    />
  );
};

export default NavBarContainer;
