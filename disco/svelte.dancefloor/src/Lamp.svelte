<script>

    export let links;
    export let oben;
    export let size;

    let interval= Math.random() * 1000 + 100;

    let col= 
    `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;



  
    let isShining = true;

    function toggleLamp(){
        isShining = !isShining;
    }

    setInterval(toggleLamp, interval);

</script>

<div class="lamp" 
class:hidden={!isShining}
style="background-color:{col}; top:{oben}px; left:{links}px; height: {size}px; width: {size}px;"></div>

<style>
    .lamp{
        position: absolute;
        border-radius: 50%;
        box-shadow: 0 0 5px white;
    }

    .hidden{
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
</style>

