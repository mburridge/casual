export default class Topic {

	constructor(topics) {
		this.topics = topics.map(topic => {
			const used = false
			return { topic, used }
		});
		this.topicCount = 0
	}

	getNewTopic = () => {

		if (this.topicCount == this.topics.length - 1) return 0 // we've run out of topics

		// get a new random array index
		let i = Math.floor(Math.random() * this.topics.length)

		// check if it's already been used
		while (this.topics[i].used || i == 0) {
			// if so keep trying
			i = Math.floor(Math.random() * this.topics.length)
		}

		// mark as used and increment topicCount
		this.topics[i].used = true
		this.topicCount++

		return this.topics[i].topic

	}

}