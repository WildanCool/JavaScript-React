import React, { useState } from "react";
import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (text) => set((state) => ({ tasks: [...state.tasks, text] })),
  removeTask: (text) => set((state) => ({ tasks: state.tasks.filter((t) => t !== text) })),
}));

const TodoApp = () => {
  const [task, setTask] = useState("");
  const { tasks, addTask, removeTask } = useTaskStore();

  const handleAddTask = () => {
    if (!task.trim()) {
      alert("Mohon isi tugas sebelum menambahkannya!");
      return;
    }
    addTask(task);
    setTask("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Tambahkan tugas..." 
          className="flex-grow p-2 border rounded-lg" 
        />
        <button 
          onClick={handleAddTask} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Tambah
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li 
            key={i} 
            className="flex justify-between items-center p-2 border-b bg-gray-100 rounded-lg"
          >
            <span>{t}</span>
            <button 
              onClick={() => removeTask(t)} 
              className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
