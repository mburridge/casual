import { useState, useEffect } from "react"

/**
 * wait the specified number of ms
 **/
function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
const logEnd = () => { console.log('end!') }

const CountDown = ({ seconds, callbackWhenFinish = logEnd }) => {

	const [counter, setCounter] = useState(null);
  
	useEffect(() => {
		if (counter === null) setCounter(seconds);
		else if (counter === 0) {
			callbackWhenFinish();
		}
		else {
			setTimeout(() => {
				setCounter(counter - 1);
			}, 1000);
		}

	}, [seconds, counter]);

	return (
		<>
			<p>{counter}</p>
		</>
	)
}

export default CountDown