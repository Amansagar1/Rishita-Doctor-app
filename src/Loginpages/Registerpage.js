import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Registerpage.css';


function Registerpage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');
  // const [Setpassword, setSetpassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); 

    setTimeout(() => {
      console.log("Registration Successful!");
      navigate('/home');
    }, 2000);
  };

  return (
    <div>
      <div className="register__main">
        <form className="register__div" onSubmit={handleRegister}>
          <h1>REGISTER</h1>
          <input
            className="register__user"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="register__user"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="register__user"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            className="register__user"
            type="text"
            placeholder="Specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
          {/* <input
            className="register__user"
            type="password"
            placeholder="Set Password"
            value={Setpassword}
            onChange={(e) => setSetpassword(e.target.value)}
            required
          /> */}
          <button type="submit" className="register__btn">
            Register
          </button>
          {/* <Link to="/Login" style={{color:"black", textDecoration:"none"}}>You Have Account?  <span style={{color:"blue"}}>Login</span></Link> */}
        </form>
      </div>
    </div>
  );
}

export default Registerpage;
