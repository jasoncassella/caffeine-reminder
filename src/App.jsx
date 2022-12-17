import { useState } from 'react';

function App() {
	const [time, setTime] = useState(null);
	const handleInput = e => {
		setTime(e.target.value);
	};
	return (
		<div className='App'>
			<label htmlFor='input'>What time is your bedtime? </label>
			<hr />
			<input id='input' type='number' onChange={handleInput} />
			<span> PM</span>
			<p>{time && `you should stop drinking caffeine after ${time - 6} PM`}</p>
		</div>
	);
}

export default App;
