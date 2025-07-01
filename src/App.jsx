
import './App.css'
import Player from './components/Player.jsx'
import GameBOARD from  './components/Gameboard.jsx'
function App() {


  

  return (
    <main>
      <div id='game-container'>
        <ol id='players'>

        <Player initialName="Player 1" symbol="X"/>
        
        <Player initialName="Player 2" symbol="O"/>

      
          
          
        </ol>
        <GameBOARD/>

      </div>
    </main>
  )
}

export default App
