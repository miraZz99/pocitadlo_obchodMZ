const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        Počítadlo pro OC Palmovka
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Domů
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pocitadlo">
              Počítadlo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
