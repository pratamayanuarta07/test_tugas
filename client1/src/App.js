//import logo from './logo.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.js";
import Home from './component/home';
import Layout from './component/layout';
import Listposting from './component/listposting';
import Login from './component/login';
import Posting from './component/posting';
import Register from './component/register';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UpdatePost from './component/updatePost';
import About from './component/about';
import Logout from './component/logout';
function App() {
  return (
    <div >
      {/* <p>aaaa</p> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/dashboard' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='posting' element={<Posting/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='listposting' element={<Listposting/>}/>
            <Route path='listposting/edit/:id/:title/:content' element={<UpdatePost/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='logout' element={<Logout/>}/>
          </Route>
        </Routes>
      </Router>
      {/* <Login/>     */}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
