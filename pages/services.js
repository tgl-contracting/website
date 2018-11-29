import Link from 'next/link'
// import '../js/init'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head>
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css" />
      <link rel="stylesheet" href="../css/style.css" />
      <title>TGL Contracting - Services</title>
    </Head>

    <header>
      <Navigation />
    </header>

    <main>

      <div class="container">
        <div class="section">

          <div class="row">
            <div class="col s12">
              <div class="icon-block">
                <br />
                <h1 class="center brown-text">Our Services</h1>
                <h3 class="center brown-text">
                  <i class="material-icons">settings</i>
                </h3>
                <ul class="collection">
                  <li class="collection-item">Consulting</li>
                  <li class="collection-item">Project management</li>
                  <li class="collection-item">Track design and build</li>
                  <li class="collection-item">Pump track design</li>
                  <li class="collection-item">Bridge design and build</li>
                  <li class="collection-item">Surfacing</li>
                  <li class="collection-item">Track drainage systems</li>
                  <li class="collection-item">Trail auditing</li>
                  <li class="collection-item">Track grading</li>
                  <li class="collection-item">Track signage systems</li>
                  <li class="collection-item">Track repair and maintenance</li>
                  <li class="collection-item">Feature construction (jumps)</li>
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
