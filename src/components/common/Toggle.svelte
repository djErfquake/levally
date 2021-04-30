<script>
    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';

    
</script>



<style>

    

</style>


<!--
<script src="https://kit.fontawesome.com/a7e9f794eb.js" crossorigin="anonymous"></script>
<div class="container">

  <div class="btn3_container">
    <span class="main">
      <i class="fas fa-times-circle btn"></i>
    </span>
  </div>
  
</div>



* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to right, #e9e4f0, #d3cce3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn1_container,
.btn2_container,
.btn3_container {
  margin: 20px 0px;
  width: 150px;
  height: 56px;
  background-color: black;
  display: flex;
  position: relative;
  border: 3px solid #111;
  margin-right: 20px;
  box-shadow: -1px 3px 22px 0px rgba(0, 0, 0, 0.75);
}

/* Style 3 */

.btn3_container {
  border-color: #fff;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: -1px 3px 22px 0px rgba(255, 255, 255, 0.75);
}

.main {
  transition: all 300ms ease;
}

.btn {
  color: #111;
  font-size: 50px;
  color: red;
  transition: all 300ms ease;
}

.active3 {
  transform: translateX(92px) rotate(350deg);
}

.greenclr {
  color: green;
}



// Style 3
const btn3_ctn = document.querySelector(".btn3_container");
const main = document.querySelector(".main");
const icon = document.querySelector(".btn");
btn3_ctn.addEventListener("click", () => {
  icon.classList.toggle("fa-check-circle");
  icon.classList.toggle("fa-times-circle");
  main.classList.toggle("active3");
  icon.classList.toggle("greenclr");
});


-->