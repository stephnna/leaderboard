import './style.css';
import LeaderBoard from './modules/leader-class.js';

const newScores = new LeaderBoard();

newScores.getScores();
newScores.AddOnClick();
newScores.refresh();
