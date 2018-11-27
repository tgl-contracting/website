import Link from 'next/link'
// import '../js/init'

export default () => (
  <>
    <header>
      <nav class="teal lighten-1" role="navigation">
        <div class="nav-wrapper container">
          <Link href="/">
            <a id="logo-container" className="brand-logo">TGL</a>
          </Link>
          <ul class="right hide-on-med-and-down">
            <li><Link href="#about"><a>About Us</a></Link></li>
            <li><Link href="/services"><a>Our Services</a></Link></li>
            <li><Link href="/work"><a>Our Work</a></Link></li>
            <li><Link href="#contact"><a>Contact</a></Link></li>
          </ul>

          <ul id="nav-mobile" class="side-nav">
            <li><Link href="#about"><a>About Us</a></Link></li>
            <li><Link href="/services"><a>Our Services</a></Link></li>
            <li><Link href="/work"><a>Our Work</a></Link></li>
            <li><Link href="#contact"><a>Contact</a></Link></li>
          </ul>
          <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
      </nav>
    </header>

    <main>
      <div id="index-banner" class="parallax-container">
        <section class="section no-pad-bot">
          <div class="container">
            <br />
            <br />
            <h1 class="header center white-text">TGL Contracting</h1>
            <div class="row center">
              <h5 class="header col s12 light">Wellington-based trail construction and maintenance solutions</h5>
            </div>
            <div class="row center">
              <Link href="/work">
                <a id="info-button-work" className="btn-large waves-effect waves-light teal lighten-1">View Our Work</a>
              </Link>
            </div>
            <br />
            <br />

          </div>
        </section>
        <div class="parallax">
          <img src="./images/wide-trail.jpg" alt="Trail img 1" />
        </div>
      </div>

      <div id="about" class="container">
        <section class="section">
          <div class="row">
            <div class="col s12">
              <div class="icon-block">
                <br />
                <h3 class="center brown-text">
                  <i class="material-icons">group</i>
                </h3>
                <h5 class="center">About us</h5>

                <p class="flow-text">TGL contracting represents a culmination of experience and industry knowledge in a new and growing industry. Based out of Wellington we work throughout New Zealand, and have gained the backing of local councils and organisations to provide consulting, track design and build, project management, race course design and construction and long term maintenance for mountain bike trails, pump tracks, BMX track, dual use trails as well as walking tracks.</p>
                <p class="light">We are at heart a company interested in quality long term trail construction and maintenance, and consider ourselves part of the broader mountain bike and outdoor recreation industry.  We have established a very well regarded specialist contracting company with the right people, skills and the equipment to get the job done.</p>
                <p class="light">All of our staff have a passion for mountain biking and the outdoors (founder Thomas Lindup previously won the 24 hour solo under 25  World Champs and holds the record for the four times around Lake Taupo race). This means we have a large vested interest in making sure the work we do is of the highest quality for us to share with our fellow riders/users, and for generations to come.</p>
                <p class="light">TGL develops long term relationships with councils and user groups to provide the best trails and facilities we can for any budget or park.</p>
                <blockquote class="light">TGL is not a landscape company!  We are an expert tracks and recreation park contractor.</blockquote>
              </div>
            </div>
          </div>
        </section>
        <div class="section">
          <div class="row center">
            <Link href="/services">
              <a id="info-button-services" className="btn-large waves-effect waves-light teal lighten-1">View Our Services</a>
            </Link>
            <Link href="/work">
              <a id="info-button-work-2" className="btn-large waves-effect waves-light teal lighten-1">View Our Work</a>
            </Link>
          </div>
        </div>
      </div>

    </main>

    <footer id="contact" class="page-footer teal">
      <div class="container">
        <div class="row">
          <div class="col s6">
            <h5 class="white-text">TGL Contracting</h5>
            <p class="grey-text text-lighten-4"></p>
            <ul>
              <li><a class="valign-wrapper white-text" href="mailto:tglcontracting@icloud.com" target="_top"><i class="small white-text material-icons">mail_outline</i>&nbsp;tglcontracting@icloud.com</a></li>
              <li class="valign-wrapper white-text"><i class="small material-icons">phone</i>&nbsp; 021 546 123</li>
            </ul>
          </div>
          <div class="col s6">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li>
                <a class="white-text" href="https://instagram.com/explore/tags/tglcontracting">
                  <svg style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
                    <path fill="white" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </a>
                <a href="https://facebook.com/tglcontracting">
                  <svg style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
                    <path fill="white" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        Built by <a href="https://github.com/desnor">de snor</a> with <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>

    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
    <script type="text/javascript" src="js/init.js"></script>
  </>
)
