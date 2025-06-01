"use client"

import { Header } from "@/components/header"
import { useState, useEffect } from "react"
import { Maximize2 } from "lucide-react"

export default function VerEnDirecto() {
  const [showAdMessage, setShowAdMessage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdMessage(false)
    }, 20000)

    return () => clearTimeout(timer)
  }, [])

  const handleFullScreen = () => {
    const iframe = document.getElementById("stream-iframe") as HTMLIFrameElement
    if (iframe && iframe.requestFullscreen) {
      iframe.requestFullscreen()
    }
  }

  useEffect(() => {
    // Cargar el script de Chatango
    const script = document.createElement('script')
    script.id = 'cid0020000409771677789'
    script.setAttribute('data-cfasync', 'false')
    script.async = true
    script.src = '//st.chatango.com/js/gz/emb.js'
    script.style.cssText = 'width: 100%;height: 100%;'
    script.textContent = JSON.stringify({
      handle: "pasedirecto",
      arch: "js",
      styles: {
        a: "C8C8C8",
        b: 100,
        c: "000000",
        d: "000000",
        k: "C8C8C8",
        l: "C8C8C8",
        m: "C8C8C8",
        p: "10",
        q: "C8C8C8",
        r: 100,
        t: 0,
        surl: 0,
        cnrs: "0.35"
      }
    })

    const chatContainer = document.getElementById('chat-container')
    if (chatContainer) {
      chatContainer.appendChild(script)
    }

    return () => {
      if (chatContainer && script.parentNode) {
        chatContainer.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Ver en Directo</h1>
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Video Section */}
          <div className="lg:col-span-3">
            {showAdMessage && (
              <div className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm px-4 py-2 rounded-lg mb-2">
                Espera 20 segundos a que se cierre el anuncio
              </div>
            )}
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
            <div className="mt-8" dangerouslySetInnerHTML={{
              __html: `
                <script async="async" data-cfasync="false" src="//pl26809807.profitableratecpm.com/e064861933e2a3a6f3d45d3fa3f5f4cc/invoke.js"></script>
                <div id="container-e064861933e2a3a6f3d45d3fa3f5f4cc"></div>
              `
            }} />
          </div>

          {/* Chat Section */}
          <div className="lg:col-span-2">
            <div className="h-[700px] bg-[#C8C8C8] rounded-xl shadow-lg overflow-hidden">
              <div id="chat-container" className="w-full h-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 