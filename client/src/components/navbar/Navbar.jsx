import React, { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import "./navbar.scss";
import Person from '../../assets/person/DefaultProfile.jpg'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { logoutUser } from "../../services/authServices";
import {SET_LOGIN, SET_NAME, SET_USER} from '../../redux/features/auth/authSlice'
import Loader from "../loader/Loader";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const logout = async() =>{
      setIsLoading(true);
      await logoutUser();
      dispatch(SET_LOGIN(false));
      dispatch(SET_NAME(''));
      dispatch(SET_USER(''));
      navigate('/login');
  }
  return (
    <div className="navbar">
      {isLoading && <Loader/>}
      <div className="navbarContainer">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            <LogoutIcon onClick={logout} className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src={Person} alt="" className="profileImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
