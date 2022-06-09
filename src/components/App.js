import Board from './Board';
import '../index.css';

function App(props) {
    return (
    <div className="game">
        <div className="game-board">
        <Board />
        </div>
    </div>
    );
};

export default App;