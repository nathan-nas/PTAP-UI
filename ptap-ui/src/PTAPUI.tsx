import React from 'react';

interface PTAPUIProps {
    // Define any props the component might need
    title: string;
}

const PTAPUI: React.FC<PTAPUIProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>This is the PTAP UI component.</p>
        </div>
    );
};

export default PTAPUI;
