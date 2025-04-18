import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import logo from './header_logo01.jpg';
import './App.css';

function App() {
  const [Users, setUsers] = useState([]);
  const usernameRef = useRef(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching data', error));
  }, []);

  useEffect(() => {
    if (usernameRef.current && !usernameRef.current.disabled) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    /*<div className="App">
      

    </div>*/
    <div className="app-container" style={{ backgroundColor: '#A8BCDF', margin: 0 }}>
    <header>
      <img src={logo} alt="AISIS Online" width="260" height="45" />
      <div>
        <h2 className="header06">Ateneo Integrated Student Information System</h2>
      </div>
    </header>
  
    <main style={{ backgroundColor: '#FFF', padding: '2rem' }}>
      <section style={{ backgroundColor: '#A8BCDF', padding: '1rem', width: '300px', margin: '0 auto' }}>
        <h3 className="header07">Sign in</h3>
        <form method="post" action="/j_aisis/login.do">
          <div style={{ marginBottom: '1rem' }}>
            <label className="text03">Username:</label>
            <input type="text" name="userName" maxLength="20" size="10" ref={usernameRef} className="text02" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="text03">Password:</label>
            <input type="password" name="password" size="10" className="text02" />
          </div>
          <div>
            <input type="submit" name="submit" value="Sign in" className="button01" />
          </div>
          <input type="hidden" name="command" value="login" />
          <input type="hidden" name="rnd" value="j4xqx4ef292s4xrfk7j5" />
        </form>
      </section>
  
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p className="text02">
          Forgot your password? Request a password reset by sending an email to{' '}
          <a href="mailto:itsupport@ateneo.edu" className="link06">itsupport@ateneo.edu</a>
        </p>
        <p><a href="classSkeds.do" className="link04">View Schedule of Classes</a></p>
      </div>
    </main>
  
    <footer style={{ backgroundColor: '#A8BCDF', padding: '1rem', textAlign: 'center' }}>
      <div>
        <a href="#" className="link06">Home</a> |{' '}
        <a href="#" className="link06">Terms & Conditions</a> |{' '}
        <a href="#" className="link06">Privacy Policy</a> |{' '}
        <a href="displayContactUs.do" className="link06">Contact Us</a>
      </div>
      <p className="text02">&copy; 2025 Ateneo Integrated Student Information System. Ateneo de Manila University. All Rights Reserved.</p>
      <p className="text02">version 2025.01.09</p>
    </footer>
  </div>
  );
}

export default App;
