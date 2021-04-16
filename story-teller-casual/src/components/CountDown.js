import { useState, useEffect } from "react"

/**
 * wait the specified number of ms
 **/
function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

const CountDown = ({ seconds, callbackWhenFinish }) => {

	const [counter, setCounter] = useState(null)

	useEffect(async () => {
		if (counter === null) setCounter(seconds);
		else if (counter === 0) callbackWhenFinish();
		else {
			await timeout(1000)
			setCounter(counter - 1)
		}

	}, [seconds, counter]);


	return (
		<>
			<p>{seconds}</p>
		</>
	)
}

export default CountDown