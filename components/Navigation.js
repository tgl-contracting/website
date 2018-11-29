import Link from 'next/link'

export default () => (
  <nav className="teal lighten-1" role="navigation">
    <div className="nav-wrapper container">
      <Link href="/">
        <a id="logo-container" className="brand-logo">TGL</a>
      </Link>
      <ul className="right hide-on-med-and-down">
        <li><Link href="#about"><a>About Us</a></Link></li>
        <li><Link href="/services"><a>Our Services</a></Link></li>
        <li><Link href="/work"><a>Our Work</a></Link></li>
        <li><Link href="#contact"><a>Contact</a></Link></li>
      </ul>

      <ul id="nav-mobile" className="side-nav">
        <li><Link href="#about"><a>About Us</a></Link></li>
        <li><Link href="/services"><a>Our Services</a></Link></li>
        <li><Link href="/work"><a>Our Work</a></Link></li>
        <li><Link href="#contact"><a>Contact</a></Link></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>
)
