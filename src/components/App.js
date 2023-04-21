// create your App component here
import React, { useState , useEffect} from 'react'

function App() {
const [ dog , setDog] = useState('')
useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((data) => setDog(data.message))
}, [])
if (!dog) return <p>Loading...</p>
  return (<>
  <img src={dog} alt="A Random Dog" />
  </>
  )
}

export default App
