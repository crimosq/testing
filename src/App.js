import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        < NavBar />
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/quizPage" element= {<QuizPage />} />
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
