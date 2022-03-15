const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav  ms-auto">

                    <li className="nav-item">
                        <a className="nav-link" href="#">Facebook</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Instagram</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Youtube</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar;