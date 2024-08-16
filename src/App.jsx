import { HashRouter as Router, Route, Routes } from "react-router-dom"


import { Home } from './pages/Home';
import { About } from './pages/About';
import { AppHeader } from "./cmps/AppHeader"
import { EmailIndex } from "./pages/EmailIndex"
import { MailDeteils } from "./pages/MailDeteils";


export function App() {
    
    return (
    <Router>
        <AppHeader/>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/EmailIndex" element={<EmailIndex />} >   
                    <Route path="/EmailIndex/:id" element={<MailDeteils />} /> 
                </Route>
            </Routes>
        </main>
    </Router>


    )
}

