import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react'

// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

    const [colorMode, setColorMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });

        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }

    const toggleMode = () => {
        if (colorMode == "light") {
            setColorMode('dark');
            document.body.classList.add('text-light', 'bg-dark');
            document.body.classList.remove('text-dark');
            document.body.classList.remove('bg-light');
            showAlert('Dark mode has been enabled successfully', 'success')
        }
        if (colorMode == "dark") {
            setColorMode('light')
            document.body.classList.add('text-light', 'bg-dark')
            document.body.classList.remove('text-light');
            document.body.classList.remove('bg-dark');
            showAlert('Light mode has been enabled successfully', 'success')
        }
    }

    return (
        <>
        {/* <BrowserRouter> */}
            <Navbar title="TextUtils" mode={colorMode} toggleMode={toggleMode} />
            <div className="container">
            <Alert alert={alert} mode={colorMode} />
            {/* <Routes>
                <Route exact path="/about" element={<About />} /> */}
                
                {/* <Route exact path="/" element= */}
                {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={colorMode}/>} /> 
            {/* </Routes> */}
            </div>
        {/* </BrowserRouter> */}
        </>
    );

    
}

export default App;