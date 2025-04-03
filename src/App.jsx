import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/homepage/HomePage';

function App() {

  return (
    <MantineProvider>
      <NavBar/>
      <HomePage/>
    </MantineProvider>
  )
}

export default App
