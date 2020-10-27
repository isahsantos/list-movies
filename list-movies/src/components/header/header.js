  
import React from 'react';
import '../../assets/style/header.css'
import Logo from'../../assets/img/logo.svg'

export default function Header(){
return(
 <div className="container">
 <img className="logo" src={Logo} /> 
 <h1> Movie List </h1>
 </div>
)

}