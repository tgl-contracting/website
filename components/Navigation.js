import Link from 'next/link'

const links = [
  <li><Link href="/#about" prefetch><a>About Us</a></Link></li>,
  <li><Link href="/services" prefetch><a>Our Services</a></Link></li>,
  <li><Link href="/work" prefetch><a>Our Work</a></Link></li>,
  <li><Link href="#contact" prefetch><a>Contact</a></Link></li>,
]

export default class extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  render() {
    return (
      <nav className="teal lighten-1" role="navigation">
        <div className="nav-wrapper container">
          <Link href="/" prefetch>
            <a id="logo-container" className="brand-logo">TGL</a>
          </Link>
          <ul className="right hide-on-med-and-down">
          { links }
          </ul>
          <ul id="nav-mobile" className="side-nav">
          { links }
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
  }
}
