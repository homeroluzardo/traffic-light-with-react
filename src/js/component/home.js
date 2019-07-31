import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
export class Home extends React.Component {
	render() {}
}
export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ""
		};
	}
	render() {
		let newRedClass = "";
		let newYellowClass = "";
		let newGreenClass = "";
		if (this.state.value === "red") {
			newRedClass = "blurLight";
		} else if (this.state.value === "yellow") {
			newYellowClass = "blurLight";
		} else if (this.state.value === "green") {
			newGreenClass = "blurLight";
		}
		return (
			//return your html here
			<div id="traffic-light">
				<div
					onClick={() => this.setState({ value: "red" })}
					className={"bulb stop " + newRedClass}
				/>
				<div
					onClick={() => this.setState({ value: "yellow" })}
					className={"bulb slow " + newYellowClass}
				/>
				<div
					onClick={() => this.setState({ value: "green" })}
					className={"bulb go " + newGreenClass}
				/>
			</div>
		);
	}
}
