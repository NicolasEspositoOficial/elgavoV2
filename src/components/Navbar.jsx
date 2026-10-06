function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>ELGAVO</h2>
        <div className="logo-underline"></div>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#metodologia text-green">METODOLOGÍA</a></li>
        <li><a href="#precios">PRECIOS</a></li>
        <li><a href="#programa">PROGRAMA</a></li>
        <li><a href="#contacto">CONTACTO</a></li>
      </ul>

      <div className="navbar-actions">
        <span className="lang-selector">
          <strong>ES</strong> <span className="text-muted">| EN</span>
        </span>
        <button className="btn-login">LOG IN</button>
      </div>
    </nav>
  );
}

export default Navbar;