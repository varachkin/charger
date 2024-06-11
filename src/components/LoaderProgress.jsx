import { useEffect, useState } from "react"

export const LoaderProgress = ({full = 0}) => {
    const [counter, setCounter] = useState(full)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter >= 100) {
                    clearInterval(intervalId);
                    return 100;
                }
                return prevCounter + 1;
            });
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="station-card-icon-wrapper">
            <span className="loader-counter">{counter} %</span>
            <div className={`station-card-icon charging`}></div>
        </div>
    )
}