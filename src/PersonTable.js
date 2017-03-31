import React, { Component } from "react";

class PersonTable extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr><th>Age</th><th>name</th><th>Gender</th><th>Email</th><th>Friends</th></tr>
        </thead>
        
        <tbody>
        
        </tbody>
      </table>
    );
  }
}
export default PersonTable;