import { useState, useEffect } from "react"

const quotes = [
  "Focus on what matters.",
  "Breathe. Begin. Believe.",
  "Stay calm and keep working.",
  "Small steps build big dreams.",
]

const MotivationQuote = () => {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 10000) // rotate every 10s

    return () => clearInterval(interval)
  }, [])

  return (
    <p
      style={{
        backgroundColor: "#FFF3B0",
        padding: "0.5em 1em",
        borderRadius: "4px",
        fontStyle: "italic",
      }}
    >
      {quotes[quoteIndex]}
    </p>
  )
}

export default MotivationQuote
