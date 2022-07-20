import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Scifi from "./components/scifi/Scifi";
import Scifit from "./components/scifit/Scifit";
import See from "./components/see/See";
import Seep from "./components/seep/Seep";
import Topten from "./components/tobten/Topten";
import Toptenp from "./components/toptenp/Toptenp";
import Trending from "./components/treanding/Trending";
import Footer from "./components/footer/Footer";
import Trendingp from "./components/trendingp/Trendingp";

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Header />

        <See />
        <div className="seep">
          <Seep img="./images/Tile Component.png" />
          <Seep img="./images/image (1).png" />
          <Seep img="./images/Image.png" />
          <Seep img="./images/image (2).png" />
          <Seep img="./images/image (3).png" />
        </div>
        <Topten />
        <div className="topten">
          <Toptenp img="./images/One.png" />
          <Toptenp img="./images/Two.png" />
          <Toptenp img="./images/Three.png" />
          <Toptenp img="./images/Four.png" />
          <Toptenp img="./images/Five.png" />
        </div>
        <Trending />
        <div className="trendingp">
          <Trendingp img="./images/Tile Component (1).png" />
          <Trendingp img="./images/Image (4).png" />
          <Trendingp img="./images/Image (5).png" />
          <Trendingp img="./images/Image (6).png" />
          <Trendingp img="./images/Image (7).png" />
        </div>
        <div className="scifi">
          <Scifi img="./images/Tile Component (2).png" />
          <Scifi img="./images/Image (8).png" />
          <Scifi img="./images/Image (9).png" />
          <Scifi img="./images/Image (10).png" />
          <Scifi img="./images/Image (12).png" />
        </div>
        <Scifit />
      <Footer/>
      </>
    </div>
  );
}

export default App;
