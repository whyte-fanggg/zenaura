import axios from "axios"

const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: "d29ec820cff9423bbaf21d9833452682",
    "content-type": "application/json",
  },
})

export const transcribeAudio = async (audioUrl: string) => {
  const response = await assembly.post("/transcript", {
    audio_url: audioUrl,
  })
  return response.data
}
