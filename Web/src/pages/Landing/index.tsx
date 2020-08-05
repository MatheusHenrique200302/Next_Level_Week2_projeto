import React, { useState, useEffect } from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import {Link} from 'react-router-dom';
import './style.css'


import api from '../../services/api';

function Landing(){
    const [totalConnections,setTotalConnectios]= useState(0);

useEffect(()=>{
    api.get('connections').then(response =>{
        const {total} = response.data;

        setTotalConnectios(total);
    })
},[]);

  return(<div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
            <img src={LogoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={LandingImg} alt="Plataformas de estudos" className="hero-image"/>
        <div className="button-container">
            <Link to="/study" className="study">
                <img src={StudyIcon} alt="Estudar"/>
                Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
                <img src={GiveClassesIcon} alt="Estudar"/>
                Dar Aulas
            </Link>
        </div>
        <span className="total-connections">
Total de  {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
   </div>
  );
}
export default Landing;