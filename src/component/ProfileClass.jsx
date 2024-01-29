import React from "react";

class Profile extends React.Component{
    render(){
        return (
            <>
                <h1>Profile in Class Component</h1>
                <h3>In class Name : {this.props.name}</h3>
            </>
        );
    }
}

export default Profile;