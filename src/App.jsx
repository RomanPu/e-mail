import { HashRouter as Router, Route, Routes } from "react-router-dom"

import { Home } from './pages/Home';
import { About } from './pages/About';
import { EmailIndex } from "./pages/EmailIndex"
import { MailDeteils } from "./pages/MailDeteils";
import { AppHeader } from "./cmps/AppHeader"
import { Folders } from "./cmps/Folders"


export function App() {
    
    return (
    <Router>
        <AppHeader/>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/EmailIndex" element={<EmailIndex />} > 
                    {/* <Route path="/EmailIndex/:folder" element={<EmailIndex />} />   */}
                    <Route path="/EmailIndex/Deteils/:id" element={<MailDeteils />} /> 
                    <Route path="/EmailIndex/:folder" element={<Folders />} />
                </Route>
            </Routes>
        </main>
    </Router>


    )
}

