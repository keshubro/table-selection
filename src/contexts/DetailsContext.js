import React, { useContext, useState } from "react";

const DetailsContext = React.createContext();

export function useDetails() {
    return useContext(DetailsContext);
}

export function DetailsProvider({ children }) {
    // const value = {name: 'KKKK'};

    const [selectedData, setSelectedData] = useState({})


    function handleValidateClick(data) {
        setSelectedData(data);
    }

    const value = {
        handleValidateClick,
        selectedData
    }

    return (
        <DetailsContext.Provider value={value}>
            {children}
        </DetailsContext.Provider>
    );
}