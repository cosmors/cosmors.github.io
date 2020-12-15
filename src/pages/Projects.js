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
          <img src={onlineStorage} alt="Search page with cellphones result"/>
          <a href="https://cosmors.github.io/frontend-online-store/" target="_blank">Fontend Online Store</a>
        </section>
        <section>
          <img src={ticTacToe} />
          <a href="https://cosmors.github.io/tic-tac-toe/" target="_blank" alt="Tic tac toe game">Tic Tac Toe</a>
        </section>
        <section>
          <img src={toDo} />
          <a href="https://cosmors.github.io/react-todo-list/" target="_blank" alt="To do list app">To-Do List</a>
        </section>
        <section>
          <img src={movieLbrary} />
          <a href="https://cosmors.github.io/movie-card-library/" target="_blank" alt="Some move cards">Movie Cards Library</a>
        </section>
      </div>
    </div>
  )
}

export default Projects;
