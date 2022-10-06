import React from 'react'
import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Stack, Box, IconButton} from "@mui/material";

import logo from '../../assets/logo.svg'
import SearchForm from '../searchForm/SearchForm';
import './Navbar.css'

const Navbar = () => {
  return (
    <Stack className='navbar' direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#fff', top: 0, justifyContent: "space-between" }}>
      <Box sx={{ display: 'flex' }}>
        <IconButton type='submit' sx={{ p: '10px', color: 'black' }} aria-label='search'>
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={30} />
        </Link>
      </Box>
 
    <SearchForm/>

    <div className="menu-icons">
      <a href="#">
       <AddBoxIcon />
      </a>
      <a href="#">
       <NotificationsNoneIcon />
      </a>
    </div>
  </Stack>
  )
}

export default Navbar