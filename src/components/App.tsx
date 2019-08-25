import React from 'react';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

interface IAppProps {
    message: string
}

const App = ({ message }: IAppProps) => {
    return (
        <div className="container">
            <h1>Hello {message}</h1>
            <Button type="primary">Test</Button>
        </div>
    );
};

export default App;
