// create your App component here
import React, {Component} from 'react'

export default class App extends Component{
    constructor(){
        super()
        this.state = {astronauts: []}
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => {
            let astronauts = json.people.map((naut)=>{
                return <p key={naut.name}>{naut.craft}: {naut.name}</p>
            })
            this.setState({astronauts: astronauts})
        })
    }

    render(){
        return(
            <div>
                <h1>People in space:</h1>
                {console.log(this.state.astronauts)}
                {this.state.astronauts}
            </div>
    )}

}