const Navbar = () => {
    return (  
        <div className="navbar-div">
    <nav className="navbar">
            <a style={{paddingLeft:"30px"}} className="navbar-brand" href="/home" >
            MoviesFlix
            </a>
            <div className="auth">
            <a className="login" href="">Login</a>
            <a className="signup" href="">Sign Up</a>
            </div>
    </nav>
        </div>
    );
}
 
export default Navbar;