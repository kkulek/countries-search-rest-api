import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {CountryPage} from "./pages/Country";

function App() {
    return (
        <Router>
            <div className="bg-gray-100 dark:bg-gray-900 h-full min-h-screen">
            <Header/>
            <main className="p-4 sm:p-10">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/countries/:name" element={<CountryPage />}/>
                    </Routes>
            </main>
            </div>
        </Router>
    )
}

export default App;
