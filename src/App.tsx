import { RecoilRoot } from 'recoil'
import './App.css'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <>
      <RecoilRoot>
        <AppRouter></AppRouter>
      </RecoilRoot>
    </>
  )
}

export default App
