import React, { useState } from "react";
import Timer from "../component/Timer";

const Cleanup = () => {

    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>
                Toggle Timer
            </button>
        </div>
    );
}

export default Cleanup;