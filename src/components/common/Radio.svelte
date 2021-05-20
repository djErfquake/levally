<script>
  export let value;
  export let label;

  function clicked() {
    if (value === label) value = null;
    else value = label;
  }
</script>
  
<style>
    .container {
      border: 2px solid #ccc;
      border-radius: 50%;
      background-color: transparent;
      color: #ccc;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      user-select: none;
    }
  
    .checked {
      background-color: #2196f3;
      color: white;
      border-color: #000;
    }
  
    input[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
    }
</style>
  
<div class:checked={value === label} class="container" on:click={clicked}>
    <input bind:group={value} type="radio" value={label} />
    {label}
</div>

