import { Listing } from './components/Listing/Listing'
import items from './data/etsy.json'

function App() {
  return (
    <Listing items={items} />
  )
}

export default App
