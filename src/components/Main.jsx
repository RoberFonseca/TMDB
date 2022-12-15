import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MovieBrowser from "./MovieBrowser";
import SingleMovie from "./SingleMovie";
import BrowserSelection from "./BrowserSelection";
import SerieBrowser from "./SerieBrowser.jsx";
import SingleSerie from "./SingleSerie";
import Navbar from "./Navbar";
import Register from "./Register";
import UserLogin from "./UserLogin"
import Favorites from "./Favorites";
import ShowUsers from "./ShowUsers";
import { setUser } from "../store/states/user";
import { useDispatch } from "react-redux";
import axios from "axios";
import SingleUser from "./SingleUser";


const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get("/api/users/me")
      .then(result => result.data)
      .then(user => dispatch(setUser(user)))
      .catch(err => console.error(err));
  }, []); 

  return(<div>
      <Routes>
        <Route path="/" element={<> <Navbar /> <BrowserSelection /></>}/>
        <Route path="/movie" element={<MovieBrowser />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/users" element={<ShowUsers />}/>
        <Route path="/login" element={<UserLogin />}/>
        <Route path="/serie" element={<SerieBrowser />}/>
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/users/:id" element={<SingleUser />} />
        <Route path="/serie/:id" element={<SingleSerie />} />
      </Routes>
    </div>)
}
  
    
  ;
  
  export default Main;