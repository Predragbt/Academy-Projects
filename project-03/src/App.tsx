import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import "./App.css";
import { Footer } from "./components/layout/Footer";

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
