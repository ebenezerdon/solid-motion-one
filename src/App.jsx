import { Router, Route, Routes, NavLink } from '@solidjs/router'
import About from './About'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink href="/" end activeClass="green-text">
          Home
        </NavLink>
        <NavLink href="/about" activeClass="green-text">
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  )
}

export default App
