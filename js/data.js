const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.getElementById('container');

const all = document.getElementById('all');

const animal = document.getElementById('animal');

const vegetable = document.getElementById('vegetable');

const user = document.getElementById('user');

all.addEventListener("click", function(){
	for (let i = 0; i < icone.length; i++) {
		const box = document.createElement('div');
		box.className = 'box';
		const {name, prefix, type, family, color} = icone[i];
		const icon = document.createElement('i');
		icon.className = family + ' ' + prefix + name + ' ' + color;
		box.appendChild(icon);
		console.log(icon);
		const title = document.createElement('span');
		title.innerHTML = name;
		box.appendChild(title);
		container.appendChild(box);
	}
});

animal.addEventListener("click", function () {
	const arrayAnimal = icone.filter((animale) => {
		return animale.type == 'animal';
	});
	console.log(arrayAnimal);
	for (let i = 0; i < arrayAnimal.length; i++) {
		const box = document.createElement('div');
		box.className = 'box';
		const { name, prefix, type, family, color } = icone[i];
		const icon = document.createElement('i');
		icon.className = family + ' ' + prefix + name + ' ' + color;
		box.appendChild(icon);
		console.log(icon);
		const title = document.createElement('span');
		title.innerHTML = name;
		box.appendChild(title);
		container.appendChild(box);
	}
});