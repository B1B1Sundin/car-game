import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import data from './svenska-ord.json';

function App() {
	const [input, setInput] = useState('');
	const [guess, setGuess] = useState('');
	const [result, setResult] = useState<boolean>();
	const [words, setWords] = useState<string[]>([]);

	function findElements(letters: string) {
		if (letters.length !== 3) return;
		const [a, b, c] = letters;
		const foundWords = data.filter((element) => {
			const firstLetter = element.indexOf(a);
			if (firstLetter === -1) return false;
			const secondLetter = element.indexOf(b, firstLetter);
			if (secondLetter === -1) return false;
			const thirdLetter = element.indexOf(c, secondLetter);
			if (thirdLetter === -1) return false;
			return true;
		});
		// words are now sorted in ascending order and by value of each letter, a is the highest value
		const finalWords = foundWords.sort((a, b) => a.length - b.length);
		setWords(finalWords);
	}

	function checkGuess(word: string) {
		if (words.includes(word)) {
			setResult(true);
		} else {
			setResult(false);
		}
	}

	return (
		<div className="App">
			<div>
				<img src="./src/standard_bil_print.jpeg" alt="" />
			</div>
			<h1>License plate game</h1>
			<h4>
				This is a word game you can play while taking a walk! First find a car, read it's license
				plate and try to come up with a word (in swedish) that uses those 3 letters in that order!
				The shortest word wins!
			</h4>

			<div className="input-search">
				<h3>Type in 3 letters!</h3>
				<input
					type="text"
					placeholder="Enter.."
					value={input}
					onChange={(a) => {
						setInput(a.target.value);
						findElements(a.target.value);
					}}
				/>
			</div>
			<div className="input-grid">
				<h3>Type in your guess!</h3>
				<input
					type="text"
					placeholder="Check.."
					value={guess}
					onChange={(e) => setGuess(e.target.value)}
				/>

				<button onClick={() => checkGuess(guess)}>Check</button>
			</div>

			{/* if result is not undefined, then show result, otherwise don't */}
			{result !== undefined && (
				<h2 style={{ color: result ? 'green' : 'red' }}>{JSON.stringify(result).toUpperCase()}</h2>
			)}
		</div>
	);
}

export default App;

function otherThing() {}

function classic(a: string, b: number): string {
	return `${a} - ${b}`;
}

const arrow = (a: string, b: number) => {
	otherThing();
	return `${a} - ${b}`;
};

const arrowOneLine = (a: string, b: number) => `${a} - ${b}`;
