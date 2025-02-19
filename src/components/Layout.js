import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
            <ul>
                <li><Link to="/StreamList">StreamList</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>

        <Outlet />
      </>
    )
};

export default Layout;