<script>
import Dancefloor from "./Dancefloor.svelte";
</script>

<main> 
  <Dancefloor w={400} h={400} lampCount={200}/>
  <Dancefloor w={200} h={600} lampCount={300}/>
  <Dancefloor w={200} h={100} lampCount={7}/>
  <Dancefloor w={100} h={600} lampCount={50}/>
  <Dancefloor w={200} h={800} lampCount={500}/>
  <Dancefloor w={200} h={100} lampCount={70}/>

</main>

<style>
main{
  display: flex;
  gap: 5px;
  align-items: center;
  height: 100vh;
  justify-content: center;

}
</style>
