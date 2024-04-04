//1) fetch datas in every 5 min and clear it after 30 min

function fetchData() {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.json())
		.then(json => console.log(json))
	 	.catch(err=>console.error(err))
}

const fetchTimer = setInterval(() => {
	fetchData();
}, 5 * 60 * 1000); // 5 min

setTimeout(() => {
	clearInterval(fetchTimer);
	console.log('Data fetching stopped.');
}, 30 * 60 * 1000); // 30 min










//2) asking queations by tmer 
let timer = 7;
const questions = [
	'What does the first word of the Quran begin with?',
];

function askQuestion(question) {
	console.log(question);

	const questionTimer = setInterval(() => {
		console.log(`Time left: ${timer} seconds`);
		timer--;

		if (timer < 0) {
			clearInterval(questionTimer);
			console.log('Time is up! your anwser: ');
			timer = 7; 
		}
	}, 1000); // 1 sec
}


for (const question of questions) {
	askQuestion(question);
	}





