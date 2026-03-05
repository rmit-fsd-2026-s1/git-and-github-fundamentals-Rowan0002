import './App.css';
import Form from './Form'
import FormCode from './FormCode'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    

    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/FormCode" element={<FormCode />} />
      </Routes>
    </Router>
  );
}

export default App;
