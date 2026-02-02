'use client'
import { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState(['System initialized...', 'Type "skills", "hobbies", or "contact"']);

  const handleCmd = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = `> Unknown command: ${cmd}`;

    if (cmd === 'skills') response = '> Python (5/5), C++, C#, AI Pipelines, SQL';
    if (cmd === 'hobbies') response = '> Glider Pilot, Motorcycle Building';
    if (cmd === 'contact') response = '> Email: [Your Email] | LinkedIn: Iiro Valliovuo';

    setLogs([...logs, `> ${input}`, response]);
    setInput('');
  };

  return (
    <div className="bg-black/80 border border-green-500/30 p-4 font-mono text-xs text-green-400 rounded-lg w-full max-w-sm shadow-2xl backdrop-blur-md">
      <div className="flex gap-2 mb-2 border-b border-green-900 pb-1">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-[10px] text-gray-500 ml-2">iiro_sys_v1.0.exe</span>
      </div>
      <div className="h-30 overflow-y-auto mb-2 space-y-1">
        {logs.map((log, i) => <div key={i} className={log.startsWith('>') ? 'text-white' : 'text-green-400'}>{log}</div>)}
      </div>
      <form onSubmit={handleCmd} className="flex border-t border-green-900 pt-2">
        <span className="mr-2 underline">usr@lab_uas:~$</span>
        <input 
          className="bg-transparent outline-none flex-1" 
          autoFocus
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}