import React from 'react';

const App = () => {
    return <div className={"grid grid-cols-3 gap-2"}>
        <div className={"col-span-2"}>col1</div>
        <div className={"col-span-1 bg-red-200 h-full max-h-full min-h-screen relative"}>col2</div>
    </div>
};

export default App;