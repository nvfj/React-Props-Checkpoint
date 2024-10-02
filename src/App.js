
import './App.css';
import PlayersList from './Component/PlayersList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
