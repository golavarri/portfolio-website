import React from "react";

import "./App.css";
import Canvas from "./utils/Canvas";

const Splash = () => {

    // Track window size dynamically
    //const [windowSize, setWindowSize] = useState({
        //width: window.innerWidth,
        //height: window.innerHeight,
    //});

    /*
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    */

    return (
        <div className="App">
            <div className="Overlay">
                <h1 className="Design-nav"><a href="/design" style={{color: "black"}}>design</a></h1>
                <h1 className="About-nav"><a href="/about" style={{color: "black"}}>about</a></h1>
                <h1 className="Code-nav"><a href="/code" style={{color: "black"}}>code</a></h1>
                <h1 className="Other-nav"><a href="/other" style={{color: "black"}}>other</a></h1>
            </div>
            <div 
                className="Background"
                style={{
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <Canvas />
            </div>
        </div>
    );
};

export default Splash;
