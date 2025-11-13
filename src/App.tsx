import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import PhilArchive from './pages/PhilArchive'
import Happenings from './pages/Happenings'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/philarchive" element={<PhilArchive />} />
          <Route path="/happenings" element={<Happenings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
