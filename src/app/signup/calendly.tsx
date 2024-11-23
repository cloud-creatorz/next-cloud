"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
    return (
        <div className="w-full bg-blue-1000"> {/* Change background color here */}
            {/* Change the width and height of the Calendly widget */}
            <InlineWidget
                styles={{
                    height: "600px", 
                    width: "100%", 
                }}
                url="https://calendly.com/coderbee786/30min"
            />
        </div>
    );
}

export default Calendly;