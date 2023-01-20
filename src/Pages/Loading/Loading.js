import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <div>
            <div className=" relative">
                <ClipLoader
                    color="#3b5d50"
                    size={100}
                    className="absolute left-[45vw] top-[50%] right-[45vw]"
                />
            </div>
        </div>
    );
};

export default Loading;