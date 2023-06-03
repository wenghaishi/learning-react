import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { authActions } from "./store";
import { useSelector, useDispatch, connect } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isAuthenticated ? <Counter /> : <Auth />}
    </Fragment>
  );
}

export default App;
