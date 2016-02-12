var prompt = require ('prompt-sync').prompt;

var total = 0;

console.log('Are you ready for a quiz?');

var ready = prompt();

console.log('I do not care whether you do or do not, you are doing it anyway.');

var start = Date.now();

var questions = [
	{
		question: 'What Boolean operator does JS not support?',
		answers: ['&& ', '|| ', '! ', '>>'],
		correct: '>>'
	},
	{
		question: 'What does the M in html stand for?:',
		answers: ['Markdown ', 'Markup ', 'Makeup ', 'Mention'],
		correct: 'markup'
	},
	{
		question: 'What does the P in NPM mean?:',
		answers: ['Project ', 'Precise ', 'Pocket ', 'Package'],
		correct: 'package'
	},
	{
		question: 'In JS, what is 5 + (2 * 7) =:',
		answers: ['49 ', '19 ', '37 ', 'I do not know'],
		correct: '19'
	},
	{
		question: 'In JS, what does double ! equal?:',
		answers: ['False ', 'Double False ', 'True ', 'Double True'],
		correct: 'double false'
	},
	{
		question: 'In CSS, if your box-sizing is set to border-box, but your items are not floating correctly, which should you check?:',
		answers: ['Border ', 'Padding ', 'Gutter ', 'Margin'],
		correct: 'margin'
	},
	{
		question: 'In HTML: which is a valid tag:',
		answers: ['</head> ', '<margin> ', '<if> ', '<oli>'],
		correct: '</head>'
	},
	{
		question: 'What tag do you use to point your HTML to your CSS?:',
		answers: ['<ul> ', '<title> ', '<a href> ', '<link>'],
		correct: '<link>'
	},
	{
		question: 'Do you need CSS to display HTML?:',
		answers: ['Yes ', 'No'],
		correct: 'no'
	},
	{
		question: 'What does the second T in HTTP mean?:',
		answers: ['Text ', 'Type ', 'Topic ', 'Transfer'],
		correct: 'transfer'
	},
	{
		question: 'What does || mean:',
		answers: ['And ', 'Or ', 'Both ', 'Neither'],
		correct: 'or'
	},
	{
		question: 'In JSON, what does the o mean:',
		answers: ['Operator ', 'Object ', 'Operation ', 'One'],
		correct: 'object'
	},
	{
		question: 'This %, equals what in JS syntax:',
		answers: ['Percent ', 'Divide By ', 'Modulo ', 'Module'],
		correct: 'modulo'
	},
	{
		question: 'What type is the result of a concatenated number and string?:',
		answers: ['A New String ', 'A Number ', 'False ', 'True'],
		correct: 'A New String'
	},
	{
		question: 'What is the airspeed velocity of an unladened swallow?:',
		answers: ["I don't know ", "African ", "European ", "11mps"],
		correct: '11mps'
	}
]

for (var i = 0 ; i < questions.length; i++) {
	console.log(questions[i].question);

	var answers = '';

	for(var j = 0; j < questions[i].answers.length; j++) {
		answers += questions[i].answers[j] + ' ';
	}
	console.log(answers)
	answer = prompt();

	if (questions[i].correct.toLowerCase() === answer.toLowerCase())	{
		console.log('Congratulations, you got it right!!!');
		total++;
	}
	else {
		console.log('Your choice of ' + answer + ' was not right, the correct answer was ' + questions[i].correct);
	}
}

var stop = Date.now();

console.log('You got ' + total + ' out of 15');

if (total / 15 * 100 >= 92) {
	console.log('Good Job, you got an A');
} 
	
	else if (total / 15 * 100 >= 84) {
		console.log('Nice effort, you got a B');
	}
	else if (total / 15 * 100 >= 76) {
		console.log('Decent enough, you got a C');
	}
	else if (total / 15 * 100 < 75) {
		console.log('SMH');
	}

var time = ((stop - start) / 1000 ) / 60;

console.log('It took you ' + time + ' minutes to finish.');

console.log('How would you rate this quiz 0 - 10');

var rating = prompt();

if (rating >= 9) {
	console.log('Thank you for your feedback.');
}
	else if (rating <= 8) {
		console.log ("I'll try harder next time");
	}
	else if (rating.toLowerCase() === 'dank');
		console.log ("Right on Playa!!!");
