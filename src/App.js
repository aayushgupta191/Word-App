import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import "./App.css";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" main="Home Page" />
      <div className="container my 3">
        <Textform heading="Enter Your Text here to Analyze" />
      </div>
    </>
  );
}

export default App;
