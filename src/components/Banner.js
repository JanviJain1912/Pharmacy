import { signOut } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import React from 'react'
// import { Link } from 'react-router-dom'

const Banner = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleClick = () =>{
    signOut(auth).then(val=>{
      navigate("/");
    })
  }
  const productClick = ()=> {
    navigate("/restaurant");
  }
  const aboutClick = ()=> {
    navigate("/about");
  }
    return(
        <div className="banner">
          <div className="banner__contents">
            <h1 className="banner__title">VD RESEARCH CHEM</h1>
            <div className="banner__buttons">
              <button className="banner__button" onClick={productClick}>Products</button>
              <button className="banner__button" onClick={aboutClick}>About Us</button>
              <button className="banner__button" onClick={handleClick}>LogOut</button>
            </div>
            <h1 className="banner__description">
            From Medicines to Wellness Products – Uncover a Spectrum of Offerings Designed to Cater to Varied Healthcare Needs and Enhance Quality of Life.Unveil the Story Behind Our Commitment to Pioneering Medical Solutions and Expertise.
            </h1>
          </div>
          <div className="banner--fadeBottom"></div>
        </div>
      )
}

export default Banner
