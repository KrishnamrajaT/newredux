import "./styles.css";
import { connect } from "react-redux";
import { add, rem } from "./redux/actions";
function App({ count, rem, add }) {
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={rem}>DEC</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state
});

const dispathStateToProps = (dispath) => ({
  rem: () => dispath(rem()),
  add: () => dispath(add())
});
export default connect(mapStateToProps, dispathStateToProps)(App);
