import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import MyAboutPage from './components/About';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="StreamList" element={<StreamList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<MyAboutPage />} />
       </Route>
      </Routes>
    </BrowserRouter>

//    <p>CHRISTIAN is HERE #2!</p>
/*
<nav>
        <ul>
          <li><Link to="/">StreamList</Link></li>
<li><Link to="/movies">Movies</Link></li>
<li><Link to="/cart">Cart</Link></li>
<li><Link to="/about">About</Link></li>
</ul>
</nav>
*/

  );
}

export default App;
