import React from 'react';
import Header from '../components/Header';
import perfil from '../img/perfil.jpg';
import frontend from '../img/frontend.png';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="vertical-img">
        <img src={frontend} />
      </div>
      <div className="split"><br />
        <div className="centered left">
          <img
            src={perfil}
            alt="Cosmo Rodrigues"
            className="perfil"
          />
        </div>
        <div className="centered right">
          <h3>Hello I'm</h3>
          <h1>Cosmo Rodrigues</h1><br />
            <p className="profile">
              Since my first computer course I realized the transformative
              power of technology, since then I have been passionate and
              enthusiastic about it. I believe that through technological innovations
              the world can become more just. I'm study full stack web development
              at Trybe, an incredible school with a teaching methodology that
              simulates a day by day work, providing technical and human skills in
              an environment of diversities. As a student I have been extensively
              involved in my school community, which has allowed me to develop
              strong interpersonal skills. My involvement in various events,
              including a week to help people with difficult in course, has allowed
              me to work closely with my peers while supporting the class.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
