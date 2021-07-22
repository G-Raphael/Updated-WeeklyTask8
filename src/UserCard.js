import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        return (
            <div>
            <div class='userdate1'>
                <img class='image' src={this.props.userData[0].avatar} alt=''></img>
                <h2 class='uname'>{this.props.userData[0].name} on code</h2>
                <p>Location</p>
                <h4>{this.props.userData[0].location}</h4>
                <p>Food</p>
                <h4>{this.props.userData[0].foodType}</h4>
                <p>Age</p>
                <h4>{this.props.userData[0].age}</h4>
                <p>Likes</p>
                <h4>{this.props.userData[0].likes}</h4>
                <p>Twitter</p>
                {/* Please note: for the sake of this assignment i use facebook 
                profile link instead of twitter */}
                <a class='mylink' target='_blank' rel='noreferrer' href='https://web.facebook.com/emefeke.raphael/'><h3>@{this.props.userData[0].twitterUsername}oncode</h3></a>
            </div>
            <div class='userdate2'>
            <img class='image' src={this.props.userData[1].avatar} alt=''></img>
                <h2 class='uname'>{this.props.userData[1].name} on code</h2>
                <p>Location</p>
                <h4>{this.props.userData[1].location}</h4>
                <p>Food</p>
                <h4>{this.props.userData[1].foodType}</h4>
                <p>Age</p>
                <h4>{this.props.userData[1].age}</h4>
                <p>Likes</p>
                <h4>{this.props.userData[1].likes}</h4>
                <p>Twitter</p>
                {/* Please note: for the sake of this assignment i use facebook 
                profile link instead of twitter */}
                <a class='mylink' target='_blank' rel='noreferrer' href='https://web.facebook.com/emefeke.raphael/'><h3>@{this.props.userData[1].twitterUsername}oncode</h3></a>
            </div>
        </div>
        )
    }
}

