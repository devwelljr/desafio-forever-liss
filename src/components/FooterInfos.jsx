import React from "react";
import { Link } from "react-router-dom";

import InfosContainer from "../styles/footerInfos";
import bandInfos from "../images/bandInfos.png";
import instaIcon from "../images/instaIcon.png";
import faceIcon from "../images/faceIcon.png";
import ybIcon from "../images/ybIcon.png";
import tiktokIcon from "../images/tiktokIcon.png";

function FooterInfos() {
  const arrayFilters = [
    "PERFUME INFANTIL",
    "SABONETES",
    "PÓS-BANHO",
    "ASSADURAS",
    "HIDRATANTES",
    "LENÇOS UMEDECIDOS",
  ];

  return (
    <InfosContainer>
      <h2 className='infoTitle'>VISITE NOSSAS REDES SOCIAIS</h2>
      <div id='imgsContainer'>
        <a
          href='https://www.instagram.com/foreverliss/'
          target='_blank'
          rel='noreferrer'
        >
          <img className='icon' src={instaIcon} alt='icone insta' />
        </a>
        <a
          href='https://www.facebook.com/foreverliss'
          target='_blank'
          rel='noreferrer'
        >
          <img className='icon' src={faceIcon} alt='icone facebook' />
        </a>
        <a
          href='https://www.youtube.com/c/ForeverLissOficial'
          target='_blank'
          rel='noreferrer'
        >
          <img className='icon' src={ybIcon} alt='icone yb' />
        </a>
        <a
          href='https://www.tiktok.com/@foreverlissprofessional'
          target='_blank'
          rel='noreferrer'
        >
          <img className='icon' src={tiktokIcon} alt='icone tiktok' />
        </a>
      </div>
      <div id='fixContainer'>
        {arrayFilters.map((filter, index) => (
          <Link to='/' key={index} style={{ textDecoration: "none" }}>
            <h3 className='fixFilters'>{filter}</h3>
          </Link>
        ))}
      </div>
      <h2 className='infoTitle'>FORMAS DE PAGAMENTO</h2>
      <img src={bandInfos} alt='Bandeiras de cartoes' />
    </InfosContainer>
  );
}

export default FooterInfos;
