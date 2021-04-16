import { useState } from "react"
import { styled } from 'goober';

import CountDown from './CountDown'

const StoryBlock = () => {

	const [waitingToStart, setWaitingToStart] = useState(false)
	const [userStartSpeaking, setUserStartSpeaking] = useState(false)
	// const [isFirstTime, setIsFirstTime] = useState(true)

	const launchUserStartSpeaking = () => {
		setUserStartSpeaking(true)
	}

	const startStoryClick = e => {
		setWaitingToStart(true)
	}
	/*
		State:
			waitingToStart = boolean
			userSpeaking = boolean
	*/
	return (
		<>
			<Btn onClick={startStoryClick} >Start the story</Btn>
			<p>this is StoryBlock</p>

			{ waitingToStart && <CountDown seconds={15} callbackWhenFinish={launchUserStartSpeaking} />}
			{ userStartSpeaking && <CountDown seconds={60} />}

		</>
	)
}

const Btn = styled("button")`
  border-radius: 14px;
  padding: 20px;
  border: none;
  font-family: Lora;
  font-size: 1rem;
	&:hover {
		cursor:pointer;
	}
`;

export default StoryBlock
