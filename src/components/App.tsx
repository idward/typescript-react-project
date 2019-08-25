import React from 'react';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Wow from './Wow';

interface IAppProps {
  message: string;
}

const App = ({ message }: IAppProps) => {
  return (
    <div className="container">
      <h1>Hello {message}</h1>
      <Button type="primary">Test</Button>
      <Wow />
    </div>
  );
};

export default App;
