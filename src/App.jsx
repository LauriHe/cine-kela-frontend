import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./views/Layout";
import Stream from "./views/Stream";
// import Calendar from "./views/Calendar";
// import Archive from "./views/Archive";
// import Tickets from "./views/Tickets";
import Info from "./views/Info";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/stream" element={<Stream></Stream>} />
          {/* <Route path="/calendar" element={<Calendar></Calendar>} />
          <Route path="/Archive" element={<Archive></Archive>} />
          <Route path="/Tickets" element={<Tickets></Tickets>} /> */}
          <Route path="/info" element={<Info></Info>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
