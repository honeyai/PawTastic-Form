import React, { Component } from 'react';
import Banner from './Banner';
let toggleVal = 0;

class PawForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      petBirthday: "",
      petBreed: "",
      petSex: "female",
      petWeight: "0-25",
      spayNeutered: "",
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


  toggleSex = () => {
    let sex = 0;
    if (toggleVal === 0) {
      sex = "male";
    } else if (toggleVal === 1) {
      sex = "female";
    }
    if (toggleVal === 0) {
      toggleVal = 1;
    } else if (toggleVal === 1) {
      toggleVal = 0;
    }
    return sex
  }

  onSexInput = event => {
    console.log(event.target.value)
    let petString = this.toggleSex()
    event.target.value === "on" ?
      this.setState({
        petSex: petString
      })
      : this.setState({
        petSex: "female"
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
      <div className="formWrapper">
        <div className="left">
          <Banner />
          <img className="dog" src={require("../Assets/images/dog.png")}/>
        </div>
        <div className="right">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <form onSubmit={this.formSubmission} className="pawForm">
            <span className="formTitle">Let's get to know your pup!</span>
            <div className="formContainer">
              <span className="name">Name</span>
              <input
                type="text"
                id="petname"
                placeholder="Pet's name"
                onChange={this.onNameInput}
              />
              <span className="bday">Birthday</span>
              <input
                type="text"
                id="petbirthday"
                placeholder="mm/dd/yyyy"
                onChange={this.onDateInput}
              />
              <span className="breed">Breed</span>
              <input
                type="text"
                id="breed"
                placeholder="Breed"
                onChange={this.onBreedInput}
              />
            </div>
            <div className="flex">
              <input
                type="checkbox"
                id="sex"
                className="checkbox"
                onChange={this.onSexInput}
              />
              <label htmlFor="sex" className="switch sex">
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
            </div>
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
      </div>
    );
  }
};

export default PawForm;
