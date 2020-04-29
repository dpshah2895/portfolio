import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/justWhite.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Darshan</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1TfjBB0OXG7kfr7PkQRJY9SCVrCKslrM_/view?usp=sharing" target="_blank" rel="noopener noreferrer"><b>View Resume</b><i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/justWhite.jpeg)',
             } }>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I am a <br /> Full Stack <br/> Software Engineer!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/dpshah2895" target="_blank" rel="noopener noreferrer"><b>View Projects</b> <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </section>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div className="center" style ={{
            width: '75%',
            marginLeft: 'auto'
          }}>Scroll Down To Know More!!!<br/>
          <FontAwesomeIcon icon={ faAngleDoubleDown } style={{marginLeft: '10%'}}/>
          
          </div>
          </div>
      </div>
      
    )
  }
}
