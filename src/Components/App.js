import "./App.css";
import Body from "./Body/Body";
import MoviePage from "./MoviePage/MoviePage";
import Nav from "./Nav/Nav";
// import uniqid from "uniqid";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="App">
          {/* nav */}
          <Nav />

          <Routes>
            {/* body */}
            <Route path="/" element={<Body />} />
            <Route path="/details/:movieId" element={<MoviePage />} />
          </Routes>
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
