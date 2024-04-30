//calculator:
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate() {
    rl.question('welcome to our calculator \nEnter a mathematical expression (e.g., 2 + 3, type "exit" to quit): ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("bye!");

            rl.close();
            return;
        }

        try {
            const result = eval(input);
            console.log(`Result: ${result}`);
        } catch (error) {
            console.error('Invalid expression');
        }

        calculate();
    });
}

calculate();

/** 
//quiz
const readline = require('node:readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const questions = [
	'Islomdagi muqaddas kitob nomi? ',
	"Qur'onda qancha sura mavjud? (faqat raqam kiriting) ",
"Islom namozda har bir rekatta o'qiladigan sura qaysi? "
];

const answers = [
	"Qur'on",
	'114',
	'Fotiha'
];

let score = 0;
let fail = 0;

function startQuiz() {
	rl.question('Bilingizni sinab korasizmi? (xa/yoq) ', (ready) => {
		if (ready.toLowerCase() === 'xa') {
			askQuestion();
		} else if (ready.toLowerCase() === 'yoq') {
			console.log("Mayli sog' bo'ling");
			rl.close();
		} else {
			console.log('Faqat "xa" yoki "yoq" javoblari qabul qilinadi!');
			startQuiz();
		}
	});
}

function askQuestion(index = 0) {
	if (index < questions.length) {
		rl.question(questions[index], (userAnswer) => {
			if (userAnswer.toLowerCase() === answers[index].toLowerCase()) {
				console.log("To'g'ri");
				score++;
			} else {
				console.log(`Noto'g'ri!`);
			}
			askQuestion(index + 1);
		});
	} else {
		console.log(`Tabriklaymiz siz ${questions.length} ta savoldan ${score} siga javob berdingiz`);
		rl.close();
	}
}
startQuiz();

*/