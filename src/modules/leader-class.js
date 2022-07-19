export default class LeaderBoard {
  // Initializations
  constructor() {
    this.leader = [];
    this.leaderBoard = document.getElementById('leaderboard');
    this.button = document.getElementById('add-scores');
  }

  // display book
  displayBooks(book) {
    let bookContainer = '';
    book.forEach((arrayItem, index) => {
      const bookContent = `
    <div id="${index}" class="score-container">${arrayItem.name}: ${arrayItem.score}</div>       
    `;
      bookContainer += bookContent;
    });
    this.leaderBoard.innerHTML = bookContainer;
  }

  // get books in html page if it exist in local storage
  getLocalStorageData() {
    const data = JSON.parse(localStorage.getItem('leader'));
    if (data !== null) {
      this.displayBooks(data);

      const scoreContent = document.querySelectorAll('.score-container');
      scoreContent.forEach((item, index) => {
        if (index % 2 !== 0) {
          document.getElementById(item.id).style.backgroundColor = '#D0D0D0';
        }
      });
    } else {
      this.awesomeBooks.style.display = 'none';
    }
  }

  // Render book
  AddOnClick() {
    this.button.onclick = () => {
      const nameValue = document.getElementById('name').value;
      const scoreValue = document.getElementById('score').value;
      const data = JSON.parse(localStorage.getItem('leader'));
      if (data !== null) {
        this.leader = data;
      }
      if (nameValue === '' || scoreValue === '') {
        return;
      }
      const newLeader = { name: nameValue, score: scoreValue };
      this.leader.push(newLeader);
      localStorage.setItem('leader', JSON.stringify(this.leader));
      this.getLocalStorageData();
      window.location.reload();
    };
  }

  getBooks() {
    if (localStorage.getItem('leader') !== null) {
      this.getLocalStorageData();
    }
  }
}