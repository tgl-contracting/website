import Link from 'next/link'
import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head>
      <title key="services">TGL Contracting - Services</title>
    </Head>

    <header>
      <Navigation />
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
  </>
)
