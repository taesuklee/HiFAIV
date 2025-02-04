import { Chat } from "./components/Chat"
import { TokenCreationForm } from "./components/TokenCreationForm"
import { TradingPatterns } from "./components/TradingPatterns"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">DeFAI Assistant</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Chat with AI Agent</h2>
          <Chat />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Create ERC-20 Token</h2>
          <TokenCreationForm />
          <h2 className="text-2xl font-semibold mt-8 mb-4">Trading Patterns</h2>
          <TradingPatterns />
        </div>
      </div>
    </div>
  )
}

