import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cursor from "./components/UI/Cursor";
import CursorProvider from "./contexts/CursorProvider";

function App() {
  return (
    <CursorProvider>
      <div className="grid min-h-screen cursor-default grid-rows-[auto_1fr_auto] lg:cursor-none">
        <Header />
        <Home />
        <Footer />
      </div>
      <Cursor />
    </CursorProvider>
  );
}

export default App;
