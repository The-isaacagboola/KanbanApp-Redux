import "./App.css";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="w-full max-w-[1920px] ">
      <NavBar />
      <div className="px-[20px] grid grid-cols-1 md:grid-cols-[300px_1fr] my-8">
        <SideBar />
        <Project />
      </div>
    </div>
  );
}

export default App;
