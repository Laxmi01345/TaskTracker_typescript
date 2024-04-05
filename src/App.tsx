
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Todo from './Todopage'
function App() {
 

  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Todo" element={<Todo/>}/>
    </Routes>
     
    </>
  )
}

export default App
