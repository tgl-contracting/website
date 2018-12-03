import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Style from '../components/Style'

export default class extends React.Component {

  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }

  render(){
    return (
      <>
        <Head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="TGL Contracting trail building solutions" />
          <meta name="keywords" content="contracting, trail building, mountain biking, tracks, trails, pump track, trail solutions" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css" />
          <link rel="stylesheet" href="../css/style.css" />
          <Style />
          <title>TGL Contracting</title>
        </Head>

        <header>
          <Navigation />
        </header>

        <main>
          <div id="index-banner" className="parallax-container">
            <section className="section no-pad-bot">
              <div className="container">
                <br />
                <br />
                <h1 className="header center white-text">TGL Contracting</h1>
                <div className="row center">
                  <h5 className="header col s12 light">Wellington-based trail construction and maintenance solutions</h5>
                </div>
                <div className="row center">
                  <Link href="/work" prefetch>
                    <a id="info-button-work" className="btn-large waves-effect waves-light teal lighten-1">View Our Work</a>
                  </Link>
                </div>
                <br />
                <br />

              </div>
            </section>
            <div className="parallax">
              <img src="/static/wide-trail.jpg" alt="Trail img 1" />
            </div>
          </div>

          <div id="about" className="container">
            <section className="section">
              <div className="row">
                <div className="col s12">
                  <div className="icon-block">
                    <br />
                    <h3 className="center brown-text">
                      <i className="material-icons">group</i>
                    </h3>
                    <h5 className="center">About us</h5>

                    <p className="flow-text">TGL contracting represents a culmination of experience and industry knowledge in a new and growing industry. Based out of Wellington we work throughout New Zealand, and have gained the backing of local councils and organisations to provide consulting, track design and build, project management, race course design and construction and long term maintenance for mountain bike trails, pump tracks, BMX track, dual use trails as well as walking tracks.</p>
                    <p className="light">We are at heart a company interested in quality long term trail construction and maintenance, and consider ourselves part of the broader mountain bike and outdoor recreation industry.  We have established a very well regarded specialist contracting company with the right people, skills and the equipment to get the job done.</p>
                    <p className="light">All of our staff have a passion for mountain biking and the outdoors (founder Thomas Lindup previously won the 24 hour solo under 25  World Champs and holds the record for the four times around Lake Taupo race). This means we have a large vested interest in making sure the work we do is of the highest quality for us to share with our fellow riders/users, and for generations to come.</p>
                    <p className="light">TGL develops long term relationships with councils and user groups to provide the best trails and facilities we can for any budget or park.</p>
                    <blockquote className="light">TGL is not a landscape company!  We are an expert tracks and recreation park contractor.</blockquote>
                  </div>
                </div>
              </div>
            </section>
            <div className="section">
              <div className="row center">
                <div className="col s3" />
                <div className="col s3">
                  <Link href="/services" prefetch>
                    <a id="info-button-services" className="btn-large waves-effect waves-light teal lighten-1">Our Services</a>
                  </Link>
                </div>
                <div className="col s3">
                  <Link href="/work">
                    <a id="info-button-work-2" className="btn-large waves-effect waves-light teal lighten-1">Our Work</a>
                  </Link>
                </div>
                <div className="col s3" />
              </div>
            </div>
          </div>
        </main>
        <Footer />

        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <script type="text/javascript" src="../js/init.js"></script>
      </>
    )
  }
}
