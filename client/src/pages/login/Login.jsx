import "./login.scss";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { SET_LOGIN, SET_NAME, SET_USER, selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";
import { loginUser } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from '../../components/loader/Loader'

const initialState = {
  email: "",
  password: "",
};


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      navigate("/");
    }
  },[isLoggedIn,navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      dispatch(SET_LOGIN(true));
      dispatch(SET_NAME(data.result.user.name));
      dispatch(SET_USER(data.result.user));
      localStorage.setItem('token', data.result.token)
      navigate('/');
    } catch (error) {
      setIsLoading(false);
    }
  };


  return (
    <div class="login-page">
       {isLoading && <Loader/>}
      <div class="form">
        <form class="login-form" type="submit" onSubmit={handleSubmit}>
          <h2>SIGN IN</h2>
          <input
            type="text"
            required
            placeholder="Email"
            id="user"
            autocomplete="off"
            onChange={handleInputChange}
            name="email"
          />
          <input
            oninput="return formvalid()"
            type="password"
            required
            placeholder="Password"
            id="pass"
            autocomplete="off"
            onChange={handleInputChange}
            name="password"
          />
          <span id="vaild-pass"></span>
          <button type="submit">SIGN IN</button>
          <p class="message">
            <a href="#">Forgot your password?</a>
          </p>
        </form>
        <button className="google-btn">
              <GoogleIcon /> <span>SIGN UP WITH GOOGLE</span>
            </button>
      </div>
    </div>
  );
};

export default Login;
