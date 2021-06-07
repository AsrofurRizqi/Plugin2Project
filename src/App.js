import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
// import Home from './Home'
// import Profile from './Profile'
import Home from './pages/Home'
import Detail from './pages/BookDescription'
import Koleksi from './pages/Koleksi'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import Lifecomp from './pages/Lifecomp'
function App() {
  return (
  <BrowserRouter>
  {/* <Route path="/" exact component={Home} />
  <Route path="/profile" component={Profile} /> */}
  <Route path="/" exact component={Home}/>
  <Route path="/koleksi" exact component={Koleksi}/>
  <Route path="/login" exact component={Login}/>
  <Route path="/signup" exact component={Signup}/>
  <Route path='/detail/:id' exact component={Detail}></Route>
  </BrowserRouter>
  );
}
export default App;
