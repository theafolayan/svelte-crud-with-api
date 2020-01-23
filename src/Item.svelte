<script>
import Axios from 'axios';
// import Items from './Items';
	
	// export let name;

	let items = [];

 (function getPlayers (){
	 Axios.get('https://lara-tasks-api.herokuapp.com/api/items/').then(response=>{
		 items = response.data.data;
		 console.log(items)
	 })
 })()
let itemName = 'item name';
let data = {
	"name": itemName,
	"estimated_price": '300'

}
 let postItem = () =>{
	 Axios.post('http://127.0.0.1:8000/api/items/', data).then((response)=>console.log(response))
 }

// postItem();

</script>


<div class="row"> 
<div class=" col-lg-12">
	
		<div class="container ">
		<div class="container bg-info p-20">
			<h3 class="text-white text-center"> Add Item</h3>
			<div class="form-group">
			<input type="text" class="form-control"  bind:value={itemName} /></div>
			<div class="form group text-center">
			<button class ="btn btn-success" on:click={postItem}> Add Item</button></div>
			<br>
			</div>
			<br>
			<br>
				<h1 class="text-center"> Items to Buy</h1>
			<ul class="list-group">
			{#each items as item}
				<li class="list-group-item"> {item.name} -------- <span class="badge badge-primary badge-pill"> {item.estimated_price}</span></li>
			{/each}
			</ul>
			<br>
			
		</div>
</div>
</div>


<style>


	
</style>