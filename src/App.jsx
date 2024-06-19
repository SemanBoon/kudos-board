import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Dashboard from './Dashboard';
import KudosBoard from './KudosBoard';
import './App.css';
import Modal from './CreateBoardModal';


const Header = () => {
  return (
    <header className="app-header">
      <h1>KUDOBOARD</h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>{`\u00A9 Made by Chi♡`}</p>
    </footer>
  );
};

const App = () => {
  const [kudosBoards, setKudosBoards] = useState([]);

  useEffect (() => {
    fetchKudosBoards()
  }, []);

  // const fetchKudosBoards = async () => {
  //   //i'm getting an error here, sayig kudos board id not defined, but it is defined in the backend
  //   const response = await fetch(`${process.env.VITE_BACKEND_ADDRESS}/newBoard`);
  //   const data = await response.json();
  //   setKudosBoards(data);
  //   console.log(data);
  // };

  const fetchKudosBoards = () => {
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/kudosBoards`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setKudosBoards(data);
    })
    // .catch(error => {
    //   console.error('Error fetching kudos boards:', error);
    // });
  };


  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Dashboard />
      <KudosBoard kudosBoards={kudosBoards}/>
      <Modal/>
      <Footer />
    </div>
  );
};
export default App;
