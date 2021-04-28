/**
 * Defines the Person class
 *
 * The Person class selects a random person to speak next
 * who isn't in the recents array.
 */

 export default class Person {

	constructor(people) {
		this.people = people;
		this.recents = [];
		this.interval = 3
	}

	/**
	 * @returns  str    a random person that isn't in the recents array
	 **/
	getNewPerson = () => {

		// get a new random array index
		let i = Math.floor(Math.random() * this.people.length)

		// check if it's in the recents list
		while (this.recents.includes(i)) {
			// if it is keep trying
			i = Math.floor(Math.random() * this.people.length)
		}

		// add it to recents & remove the oldest person
		// from recents (if recents list is at max length)
		this.recents.push(i)
		if (this.recents.length > this.interval) {
			this.recents.shift()
		}
		return this.people[i]
	}

}