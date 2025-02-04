"use client"

import { useState } from "react"

const mockTradingPatterns = [
  {
    id: 1,
    name: "Moving Average Crossover",
    description: "Buy when short-term MA crosses above long-term MA, sell when it crosses below.",
  },
  {
    id: 2,
    name: "RSI Oscillator",
    description: "Buy when RSI is below 30 (oversold), sell when RSI is above 70 (overbought).",
  },
  {
    id: 3,
    name: "Bollinger Bands",
    description: "Buy when price touches lower band, sell when it touches upper band.",
  },
]

export function TradingPatterns() {
  const [patterns, setPatterns] = useState(mockTradingPatterns)

  const generateNewPattern = () => {
    // In a real application, this would call an AI service to generate a new pattern
    const newPattern = {
      id: patterns.length + 1,
      name: `AI Generated Pattern ${patterns.length + 1}`,
      description: "This is a newly generated trading pattern based on market analysis and AI predictions.",
    }
    setPatterns([...patterns, newPattern])
  }

  return (
    <div>
      <button onClick={generateNewPattern} className="mb-4 p-2 bg-green-500 text-white rounded hover:bg-green-600">
        Generate New Pattern
      </button>
      <ul className="space-y-4">
        {patterns.map((pattern) => (
          <li key={pattern.id} className="border p-4 rounded">
            <h3 className="font-bold">{pattern.name}</h3>
            <p>{pattern.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

