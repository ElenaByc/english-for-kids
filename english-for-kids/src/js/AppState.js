export default class AppState {
  constructor() {
    this.play = false;
    this.currentPage = 0;
    this.currentCard = 0;
    this.playStarted = false;
  }

  togglePlay() {
    if (this.play) {
      this.play = false;
    } else {
      this.play = true;
    }
  }

  setCurrentPage(pageId) {
    this.currentPage = pageId;
  }
}
