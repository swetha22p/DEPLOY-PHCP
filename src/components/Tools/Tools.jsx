import React from "react";
import TopBar from "../TopBar/TopBar";



const Tools = () => {
    const dataTabs = [
        { name: "Drives & Forms", path: "drives-forms" },
        { name: "Screening APIs", path: "screening-apis" },
    ];
    return (
        <>
            <TopBar tabs={dataTabs}/>
        </>
    );
}

export default Tools;