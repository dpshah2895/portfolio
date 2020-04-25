import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am currently working at Barclays Investment Bank, NYC as a Full Stack Software Engineer in the Client Facing Team. I have worked in a varied and dynamic environment and have about 1.5+ years of industrial experience.</p>
                    <p>Prior to that, I did my Masters in Computer Science from University of California, Irvine which is a reputed university in the US.
                     I am passionate about CS & I love to code because it's fun and makes a difference to peoples life. I am not a geek though :P</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Some of my expertise include</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Full Stack Development </h3>
                    <p>I have experience building several perfomance driven scalable software solutions using technologies like Java, Python, C++, HTML, CSS, JS, Angular, React, SQL and so on ...</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I have a good grasp over fundamentals of Data Structures and Algos. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Salesforce</h3>
                    <p>In my current role, I am working on CRM development as well using AURA & LWC frameworks of Salesforce.</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
