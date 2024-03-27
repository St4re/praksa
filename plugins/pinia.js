import { createPinia } from 'pinia';

export default ({ app }) => {
    // Check if app is defined within context
    if (app) {
      const pinia = createPinia();
      app.use(pinia);
    } else {
      console.error('App is undefined in plugin context');
    }
  };