import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./views/Layout";
import Stream from "./views/Stream";
import Schedule from "./views/Schedule";
import Info from "./views/Info";
import Archive from "./views/Archive";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/stream" element={<Stream></Stream>} />
          <Route path="/schedule" element={<Schedule></Schedule>} />
          <Route path="/info" element={<Info></Info>} />
          <Route path="/archive" element={<Archive></Archive>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
