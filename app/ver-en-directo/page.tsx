"use client"

import { Header } from "@/components/header"
import { useState } from "react"
import { Maximize2 } from "lucide-react"

export default function VerEnDirecto() {
  const handleFullScreen = () => {
    const iframe = document.getElementById("stream-iframe") as HTMLIFrameElement
    if (iframe && iframe.requestFullscreen) {
      iframe.requestFullscreen()
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Ver en Directo</h1>
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Section */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <iframe
                id="stream-iframe"
                title="Transmisión en directo"
                src="/stream"
                allowFullScreen
                className="w-full h-full border-none"
                referrerPolicy="origin"
              />
            </div>
            <button
              onClick={handleFullScreen}
              className="mt-4 px-4 py-2 rounded-lg font-semibold shadow bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 flex items-center gap-2"
            >
              <Maximize2 className="w-4 h-4" /> Pantalla completa
            </button>
          </div>

          {/* Chat Section */}
          <div className="h-[600px] bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <iframe
              title="Chat en directo"
              src="https://pasedirectoowncast.up.railway.app/embed/chat/readwrite"
              className="w-full h-full border-none"
              referrerPolicy="origin"
            />
          </div>
        </div>
      </main>
    </div>
  )
} 