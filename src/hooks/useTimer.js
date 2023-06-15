import { useEffect, useState } from "react";

export default function useTimer() {
  function getClosest(hour) {
    let targetHours = [0, 6, 12, 18];
    for (let h of targetHours) {
      if (h > hour) {
        return h;
      }
    }
    return 0;
  }

  const now = new Date();
  const closestHour = getClosest(now.getHours());
  const end = new Date(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getHours() >= 18 ? now.getDate() + 1 : now.getDate()} ${closestHour}:00`);
  const diff = new Date(end.getTime() - now.getTime());

  const [timer, setTimer] = useState(parseInt((diff.getTime() / 1000).toFixed()));
  const [timerString, setTimerString] = useState('0h 0min 0s');

  useEffect(() => {
    const timerId = timer > 0 && setInterval(() => {
      setTimer((time) => time - 1);
      setTimerString(`${diff.getUTCHours()}h ${diff.getUTCMinutes()}min ${diff.getUTCSeconds()}s`);
    }, 1000);
    return () => {
      clearInterval(timerId)
    }
  }, [timer]);

  return timerString
}