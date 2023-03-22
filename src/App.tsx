import React from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { Todo } from './features/Todo/Todo';

function App (): JSX.Element {
  return (
        <div className='App'>
            <Todo />
            <Toaster toastOptions={{
              style: {
                fontSize: '1.4rem'
              }
            }} position="bottom-right" reverseOrder={false} />
        </div>
  );
}

export default App;
