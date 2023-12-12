// main.js
import './app.css'; 
import Forest from './Cat.svelte';  

const app = new Forest({
  target: document.getElementById('app'),
});

export default app;
