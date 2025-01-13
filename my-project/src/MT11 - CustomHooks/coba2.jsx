import { useEffect, useState } from "react";
import useOnlineStatus from "./coba1";

export default function StatusBar() {
  const isOnline = useOnlineStatus(navigator.onLine);
  return <h1>{isOnline ? "Online" : "Offline"}</h1>;
}

export function SaveButton() {
  const isOnline = useOnlineStatus(navigator.onLine);

  function handleSaveClick() {
    console.log("Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
