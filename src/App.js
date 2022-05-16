import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/home";
import "./App.css";


function App() {
  return (
    <div>
      <Topbar />
      <div className="container" >
        <Sidebar/>
        <Home/>
        
      </div>
    </div>
  );
}

export default App;
