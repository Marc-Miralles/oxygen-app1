import logo from "../img/logo.png";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-header">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="tittle-box">
                    <h1 className="tittle">unit converter</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;