import { useEffect, useState } from "react";

const mobileBreakPoint = parseFloat("640px".replace("px", ""));

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [isMobileView, setMobileView] = useState(
        window.innerWidth < mobileBreakPoint
    );

    useEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            setMobileView(window.innerWidth < mobileBreakPoint);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return { width, height, isMobileView };
};

export default useWindowSize;
