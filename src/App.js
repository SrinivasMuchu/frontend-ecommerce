import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Topbar from './Components/TopBar/Topbar';
import Home from './Components/Home/Home';
import AccountMenu from './Components/AccountMenu/AccountMenu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyProfile from './Components/ProfilePage/MyProfile';
import LoginForm from './Components/LoginForms/LoginForm';
import SignUpForm from './Components/LoginForms/SignUpForm';

function App() {
  return (
    // <div className='App'>
    //   <Home/>
    // </div>
     <div className='App'>
     <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/my-profile" element={<MyProfile />} />
         <Route path="/login" element={<LoginForm />} />
         <Route path="/signup" element={<SignUpForm />} />
       </Routes>
     </Router>
     
   </div>
  );
}

export default App;
