import Head from 'next/head'
import Style from './Style'

export default ({ children }) => (
  <Head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TGL Contracting trail building solutions" />
    <meta name="keywords" content="contracting,trail building,mountain biking,tracks,trails,pump track,trail solutions" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css" />
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

      @media only screen and (max-width: 992px) {
        .parallax-container .section {
          position: absolute;
          top: 40%;
        }
        #index-banner .section {
          top: 10%;
        }
      }

      @media only screen and (max-width: 600px) {
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
    <title key="index">TGL Contracting</title>

    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
    { children }
  </Head>
)
