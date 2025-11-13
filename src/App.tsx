import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import YouTube from './pages/YouTube'
import Happenings from './pages/Happenings'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/happenings" element={<Happenings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
