import Item from './Item.svelte';

const app = new Item({
	target: document.body,
	props: {
		name: 'Tasks Manager'
	}
});

export default app;