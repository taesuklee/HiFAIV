"use client"

import { useState } from "react"

export function TokenCreationForm() {
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [totalSupply, setTotalSupply] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call a function to create the token on the blockchain
    console.log("Creating token:", { tokenName, tokenSymbol, totalSupply })
    alert(`Token ${tokenName} (${tokenSymbol}) created with total supply of ${totalSupply}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="tokenName" className="block mb-1">
          Token Name
        </label>
        <input
          id="tokenName"
          type="text"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="tokenSymbol" className="block mb-1">
          Token Symbol
        </label>
        <input
          id="tokenSymbol"
          type="text"
          value={tokenSymbol}
          onChange={(e) => setTokenSymbol(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="totalSupply" className="block mb-1">
          Total Supply
        </label>
        <input
          id="totalSupply"
          type="number"
          value={totalSupply}
          onChange={(e) => setTotalSupply(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Create Token
      </button>
    </form>
  )
}

