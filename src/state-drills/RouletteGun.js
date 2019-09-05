import React from 'react';

//accepting prop called bulletInChamber default val 8
export default class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chamber: null, spinningTheChamber: false };
    }

    componentWillUnmount() {
        clearTimeout()
    }

    handleClick = e => {
        this.setState({ spinningTheChamber: true })
        setTimeout(() => {
            this.setState({ chamber: Math.ceil(Math.random() * 8), spinningTheChamber: false });
        }, 2000)
        this.componentWillUnmount();
    }

    generateText() {
        if (this.state.spinningTheChamber) {
            return 'Spinning the chamber and pulling the trigger!...';
        } else if (!this.state.spinningTheChamber && this.state.chamber === null) {
            return 'Want to play Russian Roulette?'
        }
        else if (!this.state.spinningTheChamber && this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!';
        } else if (!this.state.spinningTheChamber && this.state.chamber !== null) {
            return 'You are safe';
        }
    }

    render() {
        let text = this.generateText();

        return (
            <div>
                <p>{text}</p>
                <button onClick={this.handleClick}>Spin the chamber and pull the trigger</button>
            </div>
        )
    }
}
