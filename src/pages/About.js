import React, { Component } from 'react'
import Header from '../components/Header';
import apaixonado from '../img/apaixonado.jpg';
import paizao from '../img/paizao.JPG';
import mochileiro from '../img/trilheiro.jpg';
import guerreiro from '../img/guerreiro.jpg';
import musico from '../img/musico.jpg';


export class About extends Component {
  render() {
    return (
      <div className="about">
        <Header />
        <div className="container">
          <section>
            <img src={apaixonado} />
          </section>
          <section>
            <img src={paizao} />
          </section>
          <section>
            <img src={mochileiro} />
          </section>
          <section>
            <img src={guerreiro} />
          </section>
          <section>
            <img src={musico} />
          </section>
        </div>
      </div>
    )
  }
}

export default About;

