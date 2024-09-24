import './App.css'
import { Button } from "@/components/ui/button"
 
function MyButton() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

function App() {
  

  return (
    <MyButton />
  )
}

export default App
