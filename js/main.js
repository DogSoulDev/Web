import { AppController } from './controllers/appController.js';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new AppController();
  await app.init();
});

