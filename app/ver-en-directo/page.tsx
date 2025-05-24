"use client"

import { Header } from "@/components/header"
import { useState } from "react"
import { Maximize2 } from "lucide-react"

export default function VerEnDirecto() {
  const [selectedQuality, setSelectedQuality] = useState("1080p")

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
        <div className="w-full max-w-3xl flex gap-6 items-center">
          <div className="flex-1 aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
            <iframe
              id="stream-iframe"
              title="Transmisión en directo"
              src=""
              allowFullScreen
              className="w-full h-full rounded-xl border-none"
            />
          </div>
          <div className="flex flex-col gap-4 min-w-[120px] items-center">
            <button
              onClick={() => setSelectedQuality("1080p")}
              className={`px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 ${selectedQuality === "1080p" ? "bg-green-500 text-white" : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-green-100 dark:hover:bg-green-700"}`}
            >
              1080p
            </button>
            <button
              onClick={() => setSelectedQuality("720p")}
              className={`px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 ${selectedQuality === "720p" ? "bg-green-500 text-white" : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-green-100 dark:hover:bg-green-700"}`}
            >
              720p
            </button>
            <button
              onClick={() => setSelectedQuality("360p")}
              className={`px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 ${selectedQuality === "360p" ? "bg-green-500 text-white" : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-green-100 dark:hover:bg-green-700"}`}
            >
              360p
            </button>
            <button
              onClick={handleFullScreen}
              className="px-4 py-2 rounded-lg font-semibold shadow bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 flex items-center gap-2"
            >
              <Maximize2 className="w-4 h-4" /> Pantalla completa
            </button>
          </div>
        </div>
        <p className="mt-6 text-gray-600 dark:text-gray-300">Aquí aparecerá la transmisión en directo cuando esté disponible.</p>
      </main>
    </div>
  )
} 