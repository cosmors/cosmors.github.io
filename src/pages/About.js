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
            <p>Every great man has a great woman by your side. This is mine. Friend, companion, advisor and my Play 2. She always has a friendly word, increible advises, and corrections when I need. We are together until death do us part.</p>
          </section>
          <section>
            <img src={paizao} />
            <p>What can I could be without my followers? This little guys make me wake up everyday (literally) with a smiling in my face. They are my every reason, all my 'because's'. If you lost your faith in heroes, you don't know what is to be father yet!</p>
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

