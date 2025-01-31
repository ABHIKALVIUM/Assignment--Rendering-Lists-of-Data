import React, { Component } from "react";

class HOC extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '10', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    }
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id} </span>
          <span>Name: {item.name} </span>
          <span>User Type: {item.user_type} </span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderBasedOnUserType = () => {
    const data = this.state.userData;
    const filterData = data.filter((item) => {
      return item.user_type === "Designer";
    }).map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id : {item.id} </span>
          <span>Name : {item.name} </span>
          <span>User Type : {item.user_type} </span>
        </li>
      </React.Fragment>)
    );

    return filterData;
  }

  filterDataByLetterJ = () => {
    const data = this.state.userData;
    const filterData = data.filter((item) => {
      return item.name[0] === "J";
    }).map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id} </span>
          <span>Name: {item.name} </span>
          <span>User Type: {item.user_type} </span>
        </li>
      </React.Fragment>)
    );

    return filterData;
  }

  filterDataByAge = () => {
    const data = this.state.userData;
    const filterData = data.filter((item) => {
      if (item.age <= 50 && item.age > 28) {
        return item;
      }
      return null;
    }).map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id} </span>
          <span>Name: {item.name} </span>
          <span>User Type: {item.user_type} </span>
        </li>
      </React.Fragment>)
    );

    return filterData;
  }

  calculateTotalAgeOfDesigners = () => {
    const data = this.state.userData;
    const reducedData = data.reduce((accumulator, currentValue) => {
      if (currentValue.user_type === "Designer") {
        accumulator += currentValue.years;
      }

      return accumulator;

    }, 0)

    return reducedData;
  }

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginTop: "20px", 
    };

    return (
      <div style={containerStyle}>
        <React.Fragment>
          <h1>Display all items</h1>
          <div className="display-box">
            <ul>{this.renderItems()} </ul>
          </div>
        </React.Fragment>

        <React.Fragment>
          <h1>Display based on user type</h1>
          <div className="display-box">
            <ul>{this.renderBasedOnUserType()} </ul>
          </div>
        </React.Fragment>

        <React.Fragment>
          <h1>Filter all data starting with letter J </h1>
          <div className="display-box">
            <ul>{this.filterDataByLetterJ()} </ul>
          </div>
        </React.Fragment>

        <React.Fragment>
          <h1>Filter all data based on age greater than 28 and age less than or equal to 50 </h1>
          <div className="display-box">
            <ul>{this.filterDataByAge()} </ul>
          </div>
        </React.Fragment>

        <React.Fragment>
          <h1>Find the total years of the designers </h1>
          <div className="display-box">
            <ul>{this.calculateTotalAgeOfDesigners()} </ul>
          </div>
        </React.Fragment>
      </div>
    );
  };
}

export default HOC;
