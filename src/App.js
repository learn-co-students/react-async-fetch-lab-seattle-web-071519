// create your App component here
import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.people)
            // debugger
            this.updatePeople(data.people)
        })
    }

    updatePeople = (peeps) => {
        this.setState({
            peopleInSpace: [...peeps]
        }, ()=> console.log(this.state.peopleInSpace))
    }

    render() {
        return (
            <ul>
                {this.state.peopleInSpace.map((person, index) => {
                    return <li key={index}>{person.name}, {person.craft}</li>
                })}
            </ul>
        )
    }
}

export default App