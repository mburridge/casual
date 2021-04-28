import { useState, useEffect } from "react"
import { styled } from 'goober';
import { people, topics } from '../helpers/data.js'
import Person from '../helpers/Person.js'
import Topic from '../helpers/Topic.js'

import CountDown from './CountDown'

const personContest = new Person(people)
const topicContest = new Topic(topics)

const StoryBlock = () => {

	const [timeNextSpeaker, setTimeNextSpeaker] = useState(0)
	const [timeStartSpeaking, setTimeStartSpeaking] = useState(0)
	const [personSpeaking, setPersonSpeaking] = useState("")
	const [topicTalk, setTopicTalk] = useState("")
	// const [isFirstTime, setIsFirstTime] = useState(true)

	const launchUserStartSpeaking = () => {
		setTimeNextSpeaker(0)
		setTimeStartSpeaking(10)
	}
	
	const startStoryClick = e => {
		setPersonSpeaking(personContest.getNewPerson())
		setTopicTalk(topicContest.getNewTopic())
		setTimeNextSpeaker(2)
		setTimeStartSpeaking(0)
		console.log({timeNextSpeaker, timeStartSpeaking, personSpeaking, topicTalk})
	}
	/*
		State:
			waitingToStart = boolean
			userSpeaking = boolean
	*/
	return (
		<>
			<Btn onClick={startStoryClick} >Start the story</Btn>
			
			<p>{(!!timeNextSpeaker || !!timeStartSpeaking) && personSpeaking}</p>
			<p>{(!!timeNextSpeaker || !!timeStartSpeaking) && topicTalk}</p>
			{ !!timeNextSpeaker && <CountDown seconds={timeNextSpeaker} callbackWhenFinish={launchUserStartSpeaking} />}
			{ !!timeStartSpeaking && <CountDown seconds={timeStartSpeaking} callbackWhenFinish={startStoryClick} />}

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
