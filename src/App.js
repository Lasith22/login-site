import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign" element={<SignIn />} />
    </Routes>
  );
}

export default App;
