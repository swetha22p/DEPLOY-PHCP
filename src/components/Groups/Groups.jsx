import { useOutletContext } from "react-router-dom";
import TopBar from "../TopBar/TopBar";



const Groups = () => {
    const title = useOutletContext();
    const groupsTabs = [
        { name: "Assistants", path: "assistants" },
        { name: "Medical Assistants", path: "medical-assistants" },
    ];
    return (
        <>
            <TopBar title={title} tabs={groupsTabs}/>
        </>
    );
}

export default Groups;