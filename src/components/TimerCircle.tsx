import { useState, useEffect, useRef } from "react"

const TimerCircle = () => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const setTimer = (minutes: number) => {
    setIsRunning(false)
    setSecondsLeft(minutes * 60)
  }

  useEffect(() => {
    Notification.requestPermission() // ask on mount
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            setIsRunning(false)
            if (audioRef.current) audioRef.current.play()
            if (Notification.permission === "granted") {
              new Notification("Zenaura Timer", {
                body: "Your session is complete!",
              })
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const sec = secs % 60
    return `${mins.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`
  }

  return (
    <div>
      <h1 style={{ fontSize: "3em", margin: "0.5em 0" }}>
        {formatTime(secondsLeft)}
      </h1>

      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button
          onClick={() => {
            setIsRunning(false)
            setSecondsLeft(25 * 60)
          }}
        >
          Reset
        </button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={() => setTimer(5)}>5 Min</button>
        <button onClick={() => setTimer(25)}>25 Min</button>
        <button onClick={() => setTimer(50)}>50 Min</button>
        <button
          onClick={() => {
            const min = parseInt(prompt("Enter custom minutes:") || "25")
            if (!isNaN(min)) setTimer(min)
          }}
        >
          Custom
        </button>
      </div>
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/buttons/beep-07.wav"
        preload="auto"
      />
    </div>
  )
}

export default TimerCircle
