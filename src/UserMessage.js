import React from 'react';

// w tym komponencie tylko odczytuję stan ze store'a 
import { connect } from "react-redux";

const UserMessage = (props) => (
    <ul>
        <li><strong>Imię:</strong> {props.userState.username}</li>
        <li><strong>Email:</strong> {props.userState.email}</li>
    </ul>
)

//Nie używam mapDispatchProps - nie potrzebuję tu żadnej akcji, tylko odczytuję dane ze store'a
const mapStateToProps = state => {
    return {

        // nazwa właściwości jest dowolna - taką jak wpiszę potem używam jako props - redux przekazuje stan jako props
        userState: state.myStore
    };
  };

export default connect(mapStateToProps)(UserMessage);