import React from 'react'
import {Box,Typography} from '@mui/material'

const Footer = () => {
  return (
    <>
      <Box sx={{height:'20dvh',width:'auto',textAlign:'center',alignContent:'center'}}>

        <Typography sx={{fontSize:{xs:'8px',sm:'13px'}}}> 
            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with ❤️ by asik
        </Typography>
      </Box>
    </>
  )
}

export default Footer