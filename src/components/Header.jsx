import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderContainer from "../styles/header";
import logo from "../images/logo-forever-liss-baby.png";
import iconUser from "../images/profileIcon.png";
import cartIcon from "../images/cartIcon.png";

function Header() {
  const [disable, setDisable] = useState(true);

  /* validacao do input para liberar o botao de buscar */
  const handleChange = ({ target }) => {
    const { value } = target;
    const regex = /\W|_/;

    if (value.length > 3 && !regex.test(value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logo} alt='logo-forever-liss-baby' id='logoImg' />
      </Link>
      <div>
        <input
          type='text'
          id='inputHeader'
          placeholder='Qual o mimo de hoje para o seu anjinho?'
          onChange={handleChange}
        />
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button' disabled={disable}>
            BUSCAR
          </button>
        </span>
      </div>
      <div id="linksContainer">
        <Link to='/' style={{ textDecoration: "none" }}>
          <img style={{ width: "50px" }} src={iconUser} alt='icone usuario' />
          <h4 className='linkHeader'>MINHA CONTA</h4>
        </Link>
        <Link to='/' style={{ textDecoration: "none" }}>
          <img style={{ width: "50px" }} src={cartIcon} alt='icone cart' />
          <h4 className='linkHeader'>CARRINHO</h4>
        </Link>
      </div>
    </HeaderContainer>
  );
}

export default Header;
