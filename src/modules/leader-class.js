export default class LeaderBoard {
  // Initialization
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tLLmHQIVXj0SbcfXAHdh/scores';
    this.leaderBoard = document.getElementById('leaderboard');
    this.button = document.getElementById('add-scores');
    this.refreshButton = document.getElementById('refresh');
  }

  // display scores
  displayScores(score) {
    let bookContainer = '';
    score.forEach((arrayItem, index) => {
      const bookContent = `
    <div id="${index}" class="score-container">${arrayItem.user}: ${arrayItem.score}</div>       
    `;
      bookContainer += bookContent;
    });
    this.leaderBoard.innerHTML = bookContainer;
  }

  //  post scores to api
  addScore = async (data) => {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json;
  }

  // get scores from api
getScores = async () => {
  const response = await fetch(this.url);
  const { result } = await response.json().catch((error) => new Error(error));
  this.displayScores(result);
  const scoreContent = document.querySelectorAll('.score-container');
  scoreContent.forEach((item, index) => {
    if (index % 2 !== 0) {
      document.getElementById(item.id).style.backgroundColor = '#eb6b40';
    } else document.getElementById(item.id).style.backgroundColor = '#9b45b2';
  });
}

//  display score added to api when refresh button is clicked
refresh() {
  this.refreshButton.addEventListener('click', async () => {
    await this.getScores();
  });
}

// Render book
AddOnClick() {
  this.button.onclick = async () => {
    const nameValue = document.getElementById('name').value;
    const scoreValue = document.getElementById('score').value;
    if (nameValue === '' || scoreValue === '') {
      return;
    }
    const newLeader = { user: nameValue, score: scoreValue };
    this.addScore(newLeader);
    document.getElementById('myform').reset();
  };
}
}
