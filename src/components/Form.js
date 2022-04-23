import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import emailjs from 'emailjs-com';

function Form() {
  const navigate = useNavigate();
  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_37efnhn',
        'template_805pwlb',
        e.target,
        'aUPCK6xGHAKeeBqgD'
      )
      .then((res) => {
        console.log(res);
        alert(
          'Thank you very much for Registering. We will contact you Shortly. You can reach to us if you have any Issues!'
        );
        navigate('/contact');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form">
      <div class="title">Register for the Blackbod Bootcamp</div>
      <div class="content">
        <form onSubmit={sendEmail}>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input
                type="text"
                name="fname"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Reference Number</span>
              <input
                type="text"
                name="uname"
                placeholder="Enter your reference number"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input
                type="text"
                name="number"
                placeholder="Enter your number"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">College</span>
              <input
                type="text"
                name="country"
                placeholder="Enter your College Name"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Level</span>
              <input
                type="text"
                name="level"
                placeholder="Enter your Level"
                required
              />
            </div>
          </div>
          <div class="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span class="gender-title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
