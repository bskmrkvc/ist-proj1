import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom" 
import logo from '../../assets/img/logo.png';
import './Navbar.css';

const settings = ['Profil', 'Odjava'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'grey.300' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src={logo} alt="Iznajmi me logo" className='logo'/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.5rem',
                color: 'grey.800',
                textDecoration: 'none',
                }}
            >
            IZNAJMI.ME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box sx={{m:1, display:'flex', justifyContent:'center'}}>
                  <Button variant="text" sx={{m:5, fontWeight: '800'}}>
                      <Link style={{color:'black', textDecoration:'none', ':hover': { color: 'black' } }} to="/TabelaVozila">Vozila</Link><br/>
                  </Button>

                  <Button variant="text" sx={{m:5, fontWeight: '800'}}>
                      <Link style={{color:'black', textDecoration:'none', ':hover': { color: 'black' } }} to="/DodajVozilo">Dodaj Vozilo</Link><br/>
                  </Button>

                  <Button variant="text" sx={{m:5, fontWeight: '800'}}>
                      <Link style={{color:'black', textDecoration:'none', ':hover': { color: 'black' } }} to="/NajboljeOcenjeni">Top 3 Vozila</Link><br/>
                  </Button>
              </Box> 
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            IZNAJMI.ME
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button variant="text" sx={{ m: 3, color: 'grey.800', fontWeight: '800', fontSize:'1rem', letterSpacing: '0.5rem'}} onClick={handleCloseNavMenu}>
                      <Link style={{color:'grey', textDecoration:'none'}} to="/TabelaVozila">Vozila</Link><br/>
            </Button>
            <Button variant="text" sx={{ m: 3, color: 'grey.800', fontWeight: '800', fontSize:'1rem', letterSpacing: '0.5rem'}} onClick={handleCloseNavMenu}>
                <Link style={{color:'grey', textDecoration:'none'}} to="/DodajVozilo">Dodaj Vozilo</Link><br/>
            </Button>
            <Button variant="text" sx={{ m: 3, color: 'grey.800', fontWeight: '800', fontSize:'1rem', letterSpacing: '0.5rem'}} onClick={handleCloseNavMenu}>
                <Link style={{color:'grey', textDecoration:'none'}} to="/NajboljeOcenjeni">Top 3 Vozila</Link><br/>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Podesavanja i odjava">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Nalog" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
