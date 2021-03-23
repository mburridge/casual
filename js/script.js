import { people, topics } from './data.js'
import { spinner } from './svg.js'

import Person from './Person.js'
import Topic from './Topic.js'

/*********************************************
 * DOM Elements
 *********************************************/
const panel = document.querySelector('#panel')
const nameEl = document.querySelector('#name')
const talkAboutEl = document.querySelector('#talk-about')
const topicEl = document.querySelector('#topic')
const start = document.querySelector('#start')
const timer = document.querySelector('#timer')
const restart = document.querySelector('#restart')

// const recents = []

let talkTime = 60
let seconds = talkTime

const personContest = new Person(people)
const topicContest = new Topic(topics)

/*********************************************
 * Functions
 *********************************************/

/**
 * wait the specified number of ms
 **/
function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}



/**
 * @returns  int    a random number for an object that hasn't yet been used
 **/

const runClock = async () => {

	if (seconds > 0) {
		timer.innerHTML = seconds
		await timeout(1000)
		seconds--
		runClock()
	} else {
		timer.innerHTML = 'TIME&rsquo;S UP!'
		nameEl.classList.add('finished')
		talkAboutEl.classList.add('finished')
		topicEl.classList.add('finished')
		await timeout(3000)
		restart.style.opacity = 1
	}
}

/**
 * Gets new options and updates the DOM
 **/
const generate = async () => {

	// debugger
	nameEl.style.opacity = 0
	talkAboutEl.style.opacity = 0
	topicEl.style.opacity = 0
	timer.style.opacity = 0
	restart.style.opacity = 0
	start.style.display = 'block'
	start.style.opacity = 0

	nameEl.classList.remove('finished')
	talkAboutEl.classList.remove('finished')
	topicEl.classList.remove('finished')

	let personName = personContest.getNewPerson()
	let topic = topicContest.getNewTopic()

	await timeout(1000)
	panel.style.display = 'block'
	await timeout(1000)
	nameEl.style.opacity = 1
	nameEl.innerHTML = `🤔 ${spinner}`
	await timeout(5000)
	nameEl.textContent = `${personName}`
	await timeout(1000)
	talkAboutEl.style.opacity = 1
	await timeout(1500)
	topicEl.style.opacity = 1
	topicEl.innerHTML = `🤔 ${spinner}`
	await timeout(6000)
	topicEl.textContent = `${topic}`
	await timeout(500)
	start.style.opacity = 1

	// console.log(person, people[person])
	// console.log(topic, topics[topic].topic)
	// console.log(recents)

}


/*********************************************
 * Event listeners
 *********************************************/
restart.addEventListener('click', () => {
	panel.style.display = 'none'
	generate()
})
start.addEventListener('click', () => {
	seconds = talkTime
	start.style.display = 'none'
	timer.style.opacity = 1
	runClock()
})


/*********************************************
 * Action!
 *********************************************/
generate()