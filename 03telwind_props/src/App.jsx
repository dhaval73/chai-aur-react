
import './App.css'
import Card from './component/Card'

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline bg-orange-600 rounded-md p-2">
      Hello Bhai 🙋‍♂️
    </h1>
    <div className='flex  flex-wrap'>
    <Card userName="Dhaval" btnText='Visit Profile'/>
    <Card userName="Jayant" />
    </div>
    </>
  )
}

export default App
