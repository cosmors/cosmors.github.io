import React from 'react'
import Header from '../components/Header';
import movieLbrary from '../img/movie-library.png';
import onlineStorage from '../img/online-storage.png';
import ticTacToe from '../img/tic-tac-toe.png';
import toDo from '../img/to-do.png';
function Projects() {
  return (
    <div className="project">
      <Header />
      <div className="container">
        <section>
          <img src={onlineStorage} />
        </section>
        <section>
          <img src={ticTacToe} />
        </section>
        <section>
          <img src={toDo} />
        </section>
        <section>
          <img src={movieLbrary} />
        </section>
      </div>
    </div>
  )
}

export default Projects;
