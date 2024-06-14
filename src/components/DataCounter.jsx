import { useEffect, useState } from "react";
import moment from "moment";

const DataCounter = () => {
    const [date, setDate] = useState(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    const [stepData, setStepData] = useState(0);
    const [futureDate, setFutureDate] = useState("");
    function updateDate() {
        setDate(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
    }
    function getFutureDate(day) {
        if (day === "0") {
            setFutureDate("")
        }
        else {
            setFutureDate(moment().add(day, 'days').format("dddd,MMMM Do YYYY"))
        }
    }
    function handleStepChange(e) {
        setStepData(e.target.value);
        getFutureDate(e.target.value);
    }
    useEffect(() => {
        setInterval(updateDate, 1000);
    }, [date]);
    return (
        <>
            <div>
                <h1>Date Counter</h1>
                <p>Today is <strong>{date}</strong></p>
                <input type="range" min="0" max="30" placeholder="Input range" value={stepData} onChange={(e) => handleStepChange(e)} />
                <p>{stepData}</p>
                {futureDate && <p>Future date is <strong>{futureDate}</strong></p>}
            </div>
        </>
    );
};

export default DataCounter;
