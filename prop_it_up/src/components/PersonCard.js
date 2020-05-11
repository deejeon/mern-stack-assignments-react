import React, { Component, useState } from 'react';

// class PersonCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             age: this.props.age
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.props.lastName}, {this.props.firstName}</h2>
//                 <p>Age: {this.state.age}</p>
//                 <p>Hair Color: {this.props.hairColor}</p>
//                 <button onClick={ () => { this.setState({age: this.state.age += 1})} }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
//             </div>
//         )
//     }
// }

const PersonCard = props => {
    const [age, setAge] = useState(props.age);
    const handleBirthday = event => {
        setAge(age+1);
    }

    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ handleBirthday }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;