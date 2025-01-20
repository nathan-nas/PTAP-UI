import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

const App: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string>('Button');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Button':
                return <Button label="Click Me" onClick={() => alert('Button clicked!')} />;
            case 'Input':
                return <Input value="" onChange={(e) => console.log(e.target.value)} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Component Tester</h1>
            <select onChange={(e) => setSelectedComponent(e.target.value)} value={selectedComponent}>
                <option value="Button">Button</option>
                <option value="Input">Input</option>
            </select>
            <div style={{ marginTop: '20px' }}>
                {renderComponent()}
            </div>
        </div>
    );
};

export default App; 