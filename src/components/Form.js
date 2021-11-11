import React, { Component } from 'react'

class Form extends Component {

constructor(props) {
    super(props)

    this.state = {
         username: '',
         comments: ''
    }
}


    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault() //conents will not be refreshed/vanish
    }

    render() {
        const {username, comments, topic} = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
            <div>
                <label>username</label>
                <input type='text' value={username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>topics</label>
                    <select value = {topic} onChange = {this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>

                    </select>
                </div>
                <button type = "submit" >Submit</button>
            </form>
        )
    }
    }
    export default Form