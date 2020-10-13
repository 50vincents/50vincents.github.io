import React, { useState }  from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../styles/Contact.scss';
import axios from "axios";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Breakpoint } from 'react-socks';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};


function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/myydoekp",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (

    <div>
    <Breakpoint large up>
      <div className='contact'>
        <div className='contact-left'>
          <h1 className='contact-title'>Contact Me</h1>
          <p className='contact-info contact-box'>Questions? Concerns? I'd love to get to know you better. Reach out to me below or using one of my social networks.</p>
          <form className='contact-form' onSubmit={handleOnSubmit}>
            <input id="name" type="name" name="name" placeholder="Name *" required />
            <input id="email" type="email" name="email" placeholder="Email *" required />
            <input id="phone" type="phone" name="phone" placeholder="Phone Number" required />
            <textarea id="message" name="message" placeholder="Shoot me a message!" rows="7"></textarea>
            <button type="submit" disabled={serverState.submitting}>
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>

        <div className='contact-right'>
          <LoadScript
            googleMapsApiKey=""
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <Marker
                position={center}
              />

              <InfoWindow
                position={center}
              >
                <div className='contact-map-box'>
                  <h3 className='contact-box'>Contact Me:</h3>
                  <p className='contact-box'>Vincent Thai</p>
                  <p className='contact-box'>+1 415 867 1224</p>
                  <p className='contact-box'>vincethai035@gmail.com</p>
                  <div>
                    <LinkedInIcon /><a className='contact-soc' href='https://www.linkedin.com/in/vincethai/' target="_blank">vincethai</a>
                  </div>
                  <div>
                    <GitHubIcon /><a className='contact-soc' href='https://www.github.com/50vincents' target="_blank">50vincents</a>
                  </div>
                </div>
              </InfoWindow>
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
        
      </div>
    </Breakpoint>

    <Breakpoint medium down>
      <div className='contact'>
        <h1 className='contact-title'>Contact Me</h1>
        <p className='contact-info contact-box'>Questions? Concerns? I'd love to get to know you better. Reach out to me below or using one of my social networks.</p>

        <LoadScript
          googleMapsApiKey=""
        >
          <GoogleMap
            mapContainerStyle={{width: '100%', height: '500px'}}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <Marker
              position={center}
            />

            <InfoWindow
              position={center}
            >
              <div className='contact-map-box'>
                <h3 className='contact-box'>Contact Me:</h3>
                <p className='contact-box'>Vincent Thai</p>
                <p className='contact-box'>+1 415 867 1224</p>
                <p className='contact-box'>vincethai035@gmail.com</p>
                <div>
                  <LinkedInIcon /><a className='contact-soc' href='https://www.linkedin.com/in/vincethai/' target="_blank">vincethai</a>
                </div>
                <div>
                  <GitHubIcon /><a className='contact-soc' href='https://www.github.com/50vincents' target="_blank">50vincents</a>
                </div>
              </div>
            </InfoWindow>
            <></>
          </GoogleMap>
        </LoadScript>

          <form className='contact-form' onSubmit={handleOnSubmit}>
            <input id="name" type="name" name="name" placeholder="Name *" required />
            <input id="email" type="email" name="email" placeholder="Email *" required />
            <input id="phone" type="phone" name="phone" placeholder="Phone Number" required />
            <textarea id="message" name="message" placeholder="Shoot me a message!" rows="7"></textarea>
            <button type="submit" disabled={serverState.submitting}>
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
          
      </div>
    </Breakpoint>
    </div>
  )
}

export default Contact