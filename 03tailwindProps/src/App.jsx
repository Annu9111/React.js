import './App.css'
import Cards from './components/cards'


function App() {
  // let myObject = {
  //   username:"Annu",
  //   age :20
  // }
  return (
    <>
      <h1 className="bg-gray-400 text-amber-950 p-4 rounded-2xl">
        Tailwind test
      </h1>
      <Cards channel="Annu" />
      {/* <Cards/> */}
    </>
  )
}

export default App