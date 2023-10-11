import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLang, setFromLang } = useStore()
  return (
    <div className='App'>
      <h1>Google translate clone</h1>
      <button
        onClick={() => {
          setFromLang('es')
        }}
      >
        Cambiar a español
      </button>
      {fromLang}
    </div>
  )
}

export default App
