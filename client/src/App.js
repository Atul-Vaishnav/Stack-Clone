import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestion } from './actions/question';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './AllRoutes';

function App() {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(fetchAllQuestion())
  },[dispatch]);

  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes />
      </Router >
    </div>
  );
}

export default App;
