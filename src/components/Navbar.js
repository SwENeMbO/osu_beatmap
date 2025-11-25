const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>osu! profile</h1>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}>Home</a>
                <a href="/team">Team</a>
                <a href="/contact">Contact</a>
                <a href="/donate">Donate</a>
            </div>
        </nav>
    );
}

export default Navbar;