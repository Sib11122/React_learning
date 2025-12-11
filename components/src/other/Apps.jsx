import React from "react";

class Apps extends React.Component {
    state = { counter: 0 };

    incrementCounter = () =>
        this.setState({ counter: this.state.counter + 1 });

    shouldComponentUpdate() {
        console.log("Inside shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Inside getSnapshotBeforeUpdate");
        console.log("Previous count:", prevState.counter);
        console.log("Current count:", this.state.counter);
        return prevState.counter;  // snapshot value
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Inside componentDidUpdate");
        console.log("Snapshot value:", snapshot);
    }

    render() {
        console.log("Inside render");
        return (
            <div>
                <button onClick={this.incrementCounter}>Click me</button>
                {this.state.counter}
            </div>
        );
    }
}

export default Apps;
