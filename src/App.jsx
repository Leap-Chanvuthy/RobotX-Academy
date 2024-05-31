import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./components/layouts/Footer";
import NavBar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Courses from "./pages/Courses";
import Programs from "./pages/Programs";

const App = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <style>
                {`
                ::-webkit-scrollbar {
                    width: 8px;
                    background-color: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: #E55204;
                    border-radius: 6px;
                }
                `}
            </style>
            <NavBar />
            <motion.div
                style={{ y: -scrollY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Home />
                <About />
                <WhyUs />
                <Courses/>
                <Programs />
                <Footer />
            </motion.div>
        </>
    );
};

export default App;
