
import { useEffect, useState } from "react"
import Card from "./components/Card"
import ThemeBtn from "./components/TheamBtn"
import { TheamProvider } from "./context/Theam"


function App() {

  const [theamMode, setTheamMode] = useState("light")
  const lightMode = () => setTheamMode("light")
  const darkMode = () => setTheamMode("dark")

  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector('html').classList.add(theamMode)
  }, [theamMode])

  return (
    <>
      <TheamProvider value={{ theamMode, lightMode, darkMode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </TheamProvider>
    </>
  )
}

export default App
