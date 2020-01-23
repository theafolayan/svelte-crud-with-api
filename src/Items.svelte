<div class="container card">
    <h1> {name} <button class="btn btn-primary btn-sm" on:click={toggleControl}>
      {#if showControls}
        -
        {:else} +
    {/if}</button></h1>
    <h3>  Points: {points}  <h3>

    {#if showControls}
        <button class="btn" on:click = {addPoint}> +1 </button>
    <button class="btn btn-dark" on:click = {removePoint}> -1 </button>
    <button class="btn btn-danger" on:click = {onDelete}>x</button>

    {/if}
</div>