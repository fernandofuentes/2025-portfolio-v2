'use client'

import { useEffect, useState } from 'react'

const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || 'ff2025'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const isAuthed = localStorage.getItem('auth') === 'true'
    if (isAuthed) setAuthenticated(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASSWORD) {
      localStorage.setItem('auth', 'true')
      setAuthenticated(true)
    } else {
      alert('Incorrect password.')
    }
  }

  if (authenticated) return <>{children}</>

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">Enter Password</h1>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-md bg-white/20 text-white placeholder:text-white/50 border border-white/30 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-medium"
        >
          Unlock
        </button>
      </form>
    </div>
  )
}
