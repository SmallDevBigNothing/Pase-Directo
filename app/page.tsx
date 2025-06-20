import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
    </div>
  )
}
