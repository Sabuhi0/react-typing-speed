import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="mx-auto">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <main></main>
    </div>
  )
}

export default App;
