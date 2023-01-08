import Header from "./UI/Header";
import Login from "./Components/Login/Login";
import UserProfile from "./Components/UserProfile/UserProfile";
import Cart from "./Components/Cart/Cart";
import Items from "./Components/Items/Items";

import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const showCart = useSelector(state => state.cart.showCart);

  return (
    <>
      <Header></Header>
      {!isLoggedIn && <Login></Login>}
      {isLoggedIn && <UserProfile></UserProfile>}
      {isLoggedIn && showCart && <Cart></Cart>}
      {isLoggedIn && <Items></Items>}
    </>
  );
}

export default App;
