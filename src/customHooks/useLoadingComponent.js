import React from 'react';

const useLoadingComponent = (isLoading, loadingMessage, Component, componentProps) => {
    if (isLoading) {
        return <p className="my-[2rem] mx-[10vw]">{loadingMessage}</p>;
    }
    return <Component {...componentProps} />;
};

export default useLoadingComponent;