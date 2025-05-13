
import '../../utils/ArtMobile.css';
import images from '../../utils/Other-images';

import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
};

const ArtPage = () => {

    const url = window.location.href;
    const urlParts = url.split("/");
    const projectName = urlParts[urlParts.length - 1];

    // Print project name to console for debugging
    if (projectName) {
        console.log("Project name:", projectName);
    } else {
        console.error("Project name not found in URL");
    }

    return (
        <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        >
            <div className="Art-popup-m">
                <div className="Large-image-m">
                    <button className="Back-to-other-m" onClick={() => window.history.back()}>
                        &#x2715;
                    </button>
                    {images.map((image) => {
                        if (image.name === projectName) {
                            return (
                                <img 
                                    key={image.name} 
                                    src={image.src} 
                                    alt={image.name} 
                                    className="Art-image-m"
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default ArtPage;