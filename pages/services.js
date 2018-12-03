import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head>
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="TGL Contracting trail building solutions" />
      <meta name="keywords" content="contracting, trail building, mountain biking, tracks, trails, pump track, trail solutions" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css" />
      <title>TGL Contracting - Services</title>
      <style jsx global>{`
        nav ul a,
        nav .brand-logo {
          color: #444;
        }

        p {
          line-height: 2rem;
        }

        .button-collapse {
          color: #26a69a;
        }

        .parallax-container {
          min-height: 380px;
          line-height: 0;
          height: auto;
          color: rgba(255,255,255,.9);
        }

        .parallax-container .section {
          width: 100%;
        }

        @media only screen and (max-width : 992px) {
          .parallax-container .section {
            position: absolute;
            top: 40%;
          }
          #index-banner .section {
            top: 10%;
          }
        }

        @media only screen and (max-width : 600px) {
          #index-banner .section {
            top: 0;
          }
        }

        .icon-block {
          padding: 0 15px;
        }
        .icon-block .material-icons {
          font-size: inherit;
        }

        footer.page-footer {
          margin: 0;
        }
      `}</style>
    </Head>

    <header>
      // <Navigation />
    </header>

    <main>

      <div className="container">
        <div className="section">

          <div className="row">
            <div className="col s12">
              <div className="icon-block">
                <br />
                <h1 className="center brown-text">Our Services</h1>
                <h3 className="center brown-text">
                  <i className="material-icons">settings</i>
                </h3>
                <ul className="collection">
                  <li className="collection-item">Consulting <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Project management <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Track design and build <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Pump track design <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Bridge design and build <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Surfacing <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Track drainage systems <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Trail auditing <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Track grading <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Track signage systems <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Track repair and maintenance <i className="right material-icons teal-text">check</i></li>
                  <li className="collection-item">Feature construction (jumps) <i className="right material-icons teal-text">check</i></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>

    <Footer/>
    <script type="text/javascript" src="../js/init.js"></script>
  </>
)
