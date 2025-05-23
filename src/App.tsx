import "./index.css";
import "./reset.css";
import Skills from "./pages/Skills/Skills";
import Test from "./pages/Test/Test";
import { Routes, Route } from "react-router";
import Layout from "./shared/layout";

function App() {
  return (
    <div className="max-w-7xl m-auto ">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Skills />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
