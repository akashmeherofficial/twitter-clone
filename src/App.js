import "./App.css";
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      {/********** {SideBar} *******/}
      <Sidebar />
      {/**************** {feed} ****************/}
      <Feed />
      {/************************* {Widgets} ****************************/}
      <Widgets />
    </div>
  );
}

export default App;
