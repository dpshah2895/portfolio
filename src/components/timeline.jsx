import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Time SDE at Barclays <span>2019-present</span></h2>
                        <p>Currently working as a Full Stack Developer at Barclays Investment Bank. My major part of the work has been in technologies like Java, Angular & Salesforce. Prior to joining Barclays as a full time employee, I interned at Barclays in Markets & Equities team.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduated from UC Irvine<span>2017-2018</span></h2>
                        <p>I completed my Masters degree in Computer Science from the University of California, Irvine. I completed my Masters programme in just 15 months with 48+ credits(thanks to the quarter system :P). I took courses like AI, ML, Data Structures, Algorithms, Operating Systems etc.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelors in Engineering from K.J.Somaiya COE<span>2013-2017</span></h2>
                        <p>I did my BE from K.J.Somaiya College of Engineering which is an autonomous university in Mumbai. I graduated with a GPA of 8.3/10. I took courses like DBMS, Software Engineering, Microprocessors and so on...Prior to BE, I went to T.P.Bhatia Jr College of Science for HSE and I was the topper at SVP school during my SSC.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
