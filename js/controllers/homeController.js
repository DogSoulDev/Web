import HomeView from '../views/homeView.js';

export default class HomeController {
  constructor() {
    this.view = new HomeView();
  }
  render() {
    document.getElementById('user-info').innerHTML = this.view.render();
  }
}
