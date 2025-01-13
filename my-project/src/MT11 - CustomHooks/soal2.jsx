import { useEffect, useState } from "react";

export function useTaskStatus(key) {
  const [status, setStatus] = useState(key);

  useEffect(() => {
    function handleCompleted() {
      setStatus(true);
    }
    function handleNotCompleted() {
      setStatus(false);
    }

    window.addEventListener("Completed", handleCompleted);
    window.addEventListener("NotCompleted", handleNotCompleted);

    return () => {
      window.removeEventListener("Completed", handleCompleted);
      window.removeEventListener("NotCompleted", handleNotCompleted);
    };
  }, []);

  return status;
}

export default function StatusTask() {
  const isTaskStatus = useTaskStatus(false);
  function handleClick() {
    const infoStatus = !isTaskStatus;
    window.dispatchEvent(
      new CustomEvent(infoStatus ? "Completed" : "NotCompleted")
    );
    console.log(infoStatus ? "Task Completed" : "Task Not Completed");
  }

  return (
    <div className="text-center p-5">
      <h1>{isTaskStatus ? "Task Completed" : "Task Not Completed"}</h1>
      <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white">Toggle Task</button>
    </div>
  );
}
