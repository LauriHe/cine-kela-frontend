import { Route, Router, Routes } from 'react-router-dom';
import Home from './views/Home';
import Layout from './views/Layout';
import Stream from './views/Stream';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/stream" element={<Stream></Stream>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
