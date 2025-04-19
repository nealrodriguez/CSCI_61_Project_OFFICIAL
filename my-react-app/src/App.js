import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import logo from './images/header_logo01.jpg';
import bg_header01 from './images/bg_header01.jpg';
import bg_header02 from './images/bg_header02.jpg';
import nav_01 from './images/header_nav01.jpg';
import nav_02 from './images/header_nav02.jpg';
import nav_03 from './images/header_nav03.jpg';
import nav_04 from './images/header_nav04.jpg';
import nav_05 from './images/header_nav05.jpg';
import nav_06 from './images/header_nav06.jpg';
import nav_07 from './images/header_nav07.jpg';
import nav_08 from './images/header_nav08.jpg';
import nav_09 from './images/header_nav09.jpg';

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
    <div className="app-container" style={{ backgroundColor: '#A8BCDF', margin: 0 }}>
      <table width="100%" cellSpacing="0" cellPadding="0" border="0">
      <tbody>
        <tr>
          <td background={bg_header01}>
            <table width="100%" cellSpacing="0" cellPadding="0" border="0">
              <tbody>
                <tr>
                  <td width="60" background={bg_header01}>
                    <img src={bg_header01} alt="i am the header" width="60" height="45" />
                  </td>
                  <td width="260">
                    <img src={logo} alt="aisis online" width="260" height="45" />
                  </td>
                  <td width="100%" background={bg_header01}>
                    <img src={bg_header01 }alt="i am the header01 other" width="5" height="45" />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td background={bg_header02}>
            <table width="100%" cellSpacing="0" cellPadding="0" border="0">
              <tbody>
                <tr>
                  <td
                    width="60"
                    valign="bottom"
                    background={bg_header02}
                  >
                    <img src={bg_header02} alt="" width="60" height="50" />
                  </td>
                  <td width="100%">
                    {/* Main Navigation */}
                    <table width="100%" cellSpacing="0" cellPadding="0" border="0">
                      <tbody>
                        <tr>
                          <td width="10">
                            <img src={nav_01} alt="" width="10" height="10" />
                          </td>
                          <td
                            width="100%"
                            background={nav_02}
                          >
                            {/*<img src={nav_02} alt="" width="5" height="10" />*/}
                          </td>
                          <td width="10">
                            <img src={nav_03} alt="" width="10" height="10" />
                          </td>
                        </tr>
                        <tr>
                          <td width="10" background={nav_04}>
                            {/*<img src={nav_04} alt="" width="10" height="20" />*/}
                          </td>
                          <td
                            width="100%"
                            align="center"
                            valign="bottom"
                            background={nav_05}
                            className="link01"
                          >
                            Ateneo Integrated Student Information System
                          </td>
                          <td width="10" background={nav_06}>
                            {/*<img src={nav_06} alt="" width="10" height="20" />*/}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={nav_07} alt="" width="10" height="20" />
                          </td>
                          <td background={nav_08}>
                            {/*<img src={nav_08} alt="" width="5" height="20" />8*/}
                          </td>
                          <td>
                            <img src={nav_09} alt="" width="10" height="20" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    width="60"
                    valign="bottom"
                    background={bg_header02}
                  >
                    <img src={bg_header02} alt="" width="60" height="50" />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    {/*
      <img src={logo} alt="AISIS Online" width="260" height="45" />
      <div>
        <h2 className="header06">Ateneo Integrated Student Information System</h2>
      </div>*/}
  
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
