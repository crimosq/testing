import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import AccountPage from './components/Account';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import TestPage from './components/TestPage';


function App() {
  return (
    <div>
      <Router>
        < NavBar />
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/quizPage" element= {<QuizPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
