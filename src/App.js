import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [script, setScript] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_BRAINFUCK_SERVER_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ script })
    });
    const data = await response.json();
    setOutput(data.output);
  };

  return (
    <div className="App container mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-lg font-bold">Brainfuck Interpreter</h1>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          placeholder="Enter your Brainfuck code here..."
          value={script}
          onChange={(e) => setScript(e.target.value)}
        ></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Run Script
        </button>
        <div className="output p-2 bg-gray-100 border rounded">
          <p className="text-red-500 font-medium">Output:</p>
          <pre>{output}</pre>
        </div>
      </form>
    </div>
  );
}

export default App;