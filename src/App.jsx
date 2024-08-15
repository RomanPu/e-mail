import { HashRouter as Router, Route, Routes } from "react-router-dom"


import { Home } from './pages/Home';
import { About } from './pages/About';
import { AppHeader } from "./cmps/AppHeader"
import { EmailIndex } from "./pages/EmailIndex"


export function App() {

    return (
    <Router>
        <AppHeader/>
        <main>
            <Routes>
                <Route path="/EmailIndex" element={<EmailIndex />} />   
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </main>
    </Router>


    )
}

