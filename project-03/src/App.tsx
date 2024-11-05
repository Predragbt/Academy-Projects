import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import "./App.css";
import { Footer } from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
