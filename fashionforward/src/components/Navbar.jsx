import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                
                <Toolbar>
                    <Typography variant="h6">Products</Typography>
                    &nbsp;&nbsp;
                    <Link to='/home'>
                        <Button variant='contained' color='secondary'>Home</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Link to='/add'>
                        <Button variant='contained' color='success'>Add</Button>
                    </Link>&nbsp;&nbsp;
                </Toolbar>
            </AppBar>
            <br /><br />
        </div>
  )
}
   
export default Navbar