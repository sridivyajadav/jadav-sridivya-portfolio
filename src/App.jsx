import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        {/* Sections will go here */}
      </main>
      <Footer />
    </div>
  )
}
