import styled from 'styled-components'
import './App.css'
import { CartWidget } from './components/navbar/CartWidget'
import { NavBar } from './components/navbar/NavBar'
import { ItemList } from './components/itemlist/ItemList';

function App() {

  const AppContainer = styled.div`
    background: #f5f5f5;
    height: 100vh;
  `;

  return (
    <>
      <AppContainer>
        <NavBar />
        <ItemList />
      </AppContainer>
    </>
  )
}

export default App
