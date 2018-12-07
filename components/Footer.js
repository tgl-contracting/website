export default () => (
  <>
    <style jsx global>{`
      .icon-link:hover {
        color: filter(invert(25%))
      }
    `}</style>
    <footer id="contact" className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h5 className="white-text">TGL Contracting</h5>
            <p className="grey-text text-lighten-4"></p>
            <ul>
              <li><a className="valign-wrapper white-text" href="mailto:tglcontracting@icloud.com" target="_top"><i className="small white-text material-icons">mail_outline</i>&nbsp;tglcontracting@icloud.com</a></li>
              <li className="valign-wrapper white-text"><i className="small material-icons">phone</i>&nbsp; 021 546 123</li>
            </ul>
          </div>
          <div className="col s6">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li>
                <a className="white-text" href="https://instagram.com/explore/tags/tglcontracting">
                  <svg className="icon-link" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
                    <path fill="white" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </a>
                <a href="https://facebook.com/tglcontracting">
                  <svg className="icon-link" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
                    <path fill="white" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        Built by <a className="brown-text text-lighten-3" href="https://github.com/desnor">de snor</a> with <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>
  </>
)
