// main.js
import './app.css';  // Import your styles
import Forest from './Forest.svelte';  // Import Forest.svelte

const app = new Forest({
  target: document.getElementById('app'),
});

export default app;
