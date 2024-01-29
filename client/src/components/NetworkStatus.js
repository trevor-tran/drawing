import { useEffect, useState } from "react";

export default function NetworkStatus({ latency, connected, room }) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return (
    <>
      <p>Online: {isOnline ? '✅' : '❌'}</p>
      {connected ?
        <>
          <p className="mx-4">Room: {room}</p>
          <p className="mx-4">Ping: {latency}</p>
        </> : null}
    </>
  )
}
