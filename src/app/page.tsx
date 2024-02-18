import Chat from "@/components/Chat";


export default function Home() {
  return (
    <div className="App">
    <header className="App-header">
       {/* align center */}
      <h1 style={{ textAlign: 'center' }}>Traffic Ai chatbot</h1>
    </header>
    <main>
      <Chat />
    </main>
  </div>
  )
}
