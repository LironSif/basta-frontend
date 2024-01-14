import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import NavbarDT from './NavbarDT'
import NavbarMobile from './NavbarMobile'

export default function Navbar(){
    
    const theme= useTheme()
    const matches= useMediaQuery(theme.breakpoints.down('md'))
    
    return (
     <>
       {matches ? <NavbarMobile matches={matches}/>
       : (<NavbarDT matches={matches}/>)}
     </>
  )
}