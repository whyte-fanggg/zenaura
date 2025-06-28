import { useEffect, useState } from "react";
import { db } from "../services/FirebaseService";
import { collection, addDoc, getDocs } from "firebase/firestore";

const SessionStats = () => {
  const [sessions, setSessions] = useState<number>(0);

  useEffect(() => {
    const fetchSessions = async () => {
      const querySnapshot = await getDocs(collection(db, "sessions"));
      setSessions(querySnapshot.size);
    };
    fetchSessions();
  }, []);

  const addSession = async () => {
    await addDoc(collection(db, "sessions"), {
      timestamp: new Date(),
    });
    setSessions((prev) => prev + 1);
  };

  return (
    <div>
      <p>Pomodoro Sessions Completed: {sessions}</p>
      <button onClick={addSession}>Add Session</button>
    </div>
  );
};

export default SessionStats;
