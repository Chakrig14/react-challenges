import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const Accordian = ({ fetchedData }) => {
    const [showDetails, setShowDetails] = useState("");

    function handleShowDetails(id) {
        if (id === showDetails) {
            setShowDetails("");
        } else {
            setShowDetails(id);
        }
    }
    return (
        <div>
            <h1>Accordian</h1>
            {fetchedData?.map((accordian) => (
                <section
                    key={accordian?.id}
                    className="accordian-container"
                    onClick={() => handleShowDetails(accordian?.id)}
                >
                    <div>
                        <p className="accordian-title">
                            <span>{accordian?.id}. </span>
                            {accordian.title}
                        </p>
                        <span>{showDetails === accordian.id ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}</span>
                    </div>
                    <p className="accordian-body">
                        {showDetails === accordian.id && accordian?.body}
                    </p>
                </section>
            ))}
        </div>
    );
};

export default Accordian;
