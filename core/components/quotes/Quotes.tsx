import React from 'react'

export class Quotes extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            joke: '',
        }
    }

    async componentDidMount() {
        const { joke } = await this.getJoke()
        
        this.setState({
            joke,
        })
    }

    async getJoke() {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const data = await response.json();

        return data;
    }

    render() {
        return (
            <h1>{this.state.joke}</h1>
        )
    }
}