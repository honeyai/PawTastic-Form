import React, { Component } from 'react';

class PawForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      petBirthday: "",
      petBreed: "",
      petSex: "female",
      spayNeutered: "",
      petWeight: "0-25",
    };
  }

  onNameInput = event => {
    this.setState({
      petName: event.target.value
    })
  }

  onDateInput = event => {
    this.setState({
      petBirthday: event.target.value
    })
  }

  onBreedInput = event => {
    this.setState({
      petBreed: event.target.value
    })
  }

  onSexInput = event => {
    event.target.value === "on" ? 
      this.setState({
          petSex: "male"
        }) : event.target.value !== "on" ?
      this.setState({
        petSex: "female"
      }) : this.setState({
        petSex: "male"
      })
  }

  onWeightChange = eventChange => {
    this.setState({
      petWeight: eventChange.target.value
    })
  }
  formSubmission = submitEvent => {
    submitEvent.preventDefault()
    console.log("submission", this.state.selectedOption)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmission} className="pawForm">
          <input 
            type="text" 
            id="petname" 
            placeholder="Pet's name" 
            onChange={this.onNameInput}
            />

          <input 
            type="text" 
            id="petbirthday" 
            placeholder="mm/dd/yyyy" 
            onChange={this.onDateInput}
            />

          <input 
            type="text" 
            id="breed" 
            placeholder="Breed" 
            onChange={this.onBreedInput}
            />

          <input 
            type="checkbox" 
            id="sex" 
            className="checkbox"
            onChange={this.onSexInput} 
            />
          <label htmlFor="sex" className="switch">
            <div className="female">Female</div>
            <div className="male">Male</div>
          </label>

          <input
            type="checkbox"
            name="spayNeutered"
            id="spayNeutered"
            className="checkbox" />
          <label htmlFor="spayNeutered" className="switch spayNeut">
            <div className="yes">Yes</div>
            <div className="no">No</div>
          </label>

          <div className="weightGroup">
            <input
              type="radio"
              name="weight"
              id="0-25"
              className="checkbox"
              value="0-25"
              // checked={this.state.selectedOption === "option1"}
              onChange={this.onWeightChange}
            />
            <label
              htmlFor="0-25"
              className="switchWeight">
              <span>0-25 lbs</span>
            </label>

            <input
              type="radio"
              name="weight" id="25-50"
              className="checkbox"
              value="25-50"
              // checked={this.state.selectedOption === "option2"}
              onChange={this.onWeightChange}
            />
            <label
              htmlFor="25-50"
              className="switchWeight">
              <span>25-50 lbs</span>
            </label>

            <input
              type="radio"
              name="weight" id="50-100"
              className="checkbox"
              value="50-100"
              // checked={this.state.selectedOption === "option3"}
              onChange={this.onWeightChange}
            />
            <label htmlFor="50-100" className="switchWeight">
              <span>50-100 lbs</span>
            </label>

            <input
              type="radio"
              name="weight"
              id="100+"
              className="checkbox"
              value="100+"
              // checked={this.state.selectedOption === "option4"}
              onChange={this.onWeightChange}
            />
            <label htmlFor="100+" className="switchWeight">
              <span>100+ lbs</span>
            </label>
          </div>
          <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
        </form>
      </div>
    );
  }
};

export default PawForm;
