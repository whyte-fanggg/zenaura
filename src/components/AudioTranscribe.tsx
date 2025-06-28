import { useState } from "react"
import { transcribeAudio } from "../services/AssemblyAIService"

const AudioTranscribe = () => {
  const [text, setText] = useState("")

  const handleTranscribe = async () => {
    const result = await transcribeAudio(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    )
    setText(result.id) // Shows transcript ID for now
  }

  return (
    <div>
      <button onClick={handleTranscribe}>Transcribe Audio</button>
      <p style={{ fontSize: "0.8em" }}>Transcript ID: {text}</p>
    </div>
  )
}

export default AudioTranscribe
