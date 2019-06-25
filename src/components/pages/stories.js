import React, { Component } from "react";
import Avatar from "react-avatar";
import Popup from "reactjs-popup";

export default class stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedUsers: [],
            user: {
                firstName: '',
                lastName: '',
                username: '',
                gender: '',
                headline: '',
                story: '',
            },
            stories: [
                {
                    id: 1,
                    firstName: "Sam",
                    lastName: "Jones",
                    username: "Sammy",
                    title: "Cool Story",
                    body: "cool story",
                    likes:0,
                },
                {
                    id: 2,
                    firstName: "Sam",
                    lastName: "Jones",
                    username: "Sammy",
                    title: "Cool Story",
                    body: "cool story",
                    likes:0,
                },
                {
                    id: 3,
                    firstName: "Sam",
                    lastName: "Jones",
                    username: "Sammy",
                    title: "Cool Story",
                    body: "cool story",
                    likes:0,
                }
            ]
        };

    }

    handleChange(event) {
        event.preventDefault();
        let user = this.state.user;
        let name = event.target.name;
        let value = event.target.value;

        user[name] = value;
        this.setState({ user })
    }
    handleusernameChange(event) {
        event.preventDefault();
        let user = this.state.user;
        let name = event.target.name;
        let value = event.target.value;

        user[name] = value;
        this.setState({ user })
    }

    addStory(e) {
        e.preventDefault()
        this.duplicate = false
        for (let i = 0; i < this.state.savedUsers.length; i++) {
            if (this.state.savedUsers.username != '' && this.state.user.username === this.state.savedUsers[i].username)
                this.duplicate = true
            console.log(this.duplicate)
        }
        if (!this.duplicate) {
            this.state.stories.push({
                'id': this.state.stories.length + 1,
                'firstName': this.state.user.firstName,
                'lastName': this.state.user.lastName,
                'username': this.state.user.username,
                'title': this.state.user.headline,
                'body': this.state.user.story,
            })
            this.state.savedUsers.push({
                'firstName': this.state.user.firstName,
                'lastName': this.state.user.lastName,
                'username': this.state.user.username,
                'gender': this.state.user.gender,
                'headline': this.state.user.headline,
                'story': this.state.user.story,
            })
            this.setState({ stories: this.state.stories });
            this.setState({
                user:{
                    firstName: '',
                    lastName: '',
                    username: '',
                    gender: '',
                    headline: '',
                    story: '',          
                }
            })
        } else {
            alert('duplicate user')
        }
    }

    render() {
        this.items = this.state.stories.map((story, key) => {
            return <div className="storyContainer">
                <Avatar name={story.firstName + " " + story.lastName} round={true} style={{ padding: 10 }} />
                <h4>{story.firstName + " " + story.lastName}</h4>
                <h1>{story.title}</h1>
                <p>
                    {story.body}
                </p>

                <Popup
                    trigger={<button className="button"> READ MORE </button>} modal>
                    {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                                &times;
                            </a><br/>
                            <div className="header">{story.title}</div>
                            <div className="content">
                                {story.body}
                            </div>
                            <div className="actions">
                                <button className="button" onClick={() => { console.log("modal closed "); close(); }}>
                                    close modal
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        })
        return (
            <div className="Stories">
                <div className="headerDivs">
                    <h1>Valentine Stories</h1>
                </div>
                <div className="addStoryDiv">

                    <Popup id ="popup"
                        trigger={<button className="button">ADD STORY</button>} modal>
                        {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                    &times;
                                </a><br/>
                                <div className="header">Add your story</div>
                                <div className="content">
                                    <form id="form" onSubmit={this.addStory.bind(this)}>
                                        <input name="firstName" placeholder="First Name" value={this.state.user["firstName"]} onChange={this.handleChange.bind(this)} /> <br />
                                        <input name="lastName" placeholder="Last Name" value={this.state.user["lastName"]} onChange={this.handleChange.bind(this)} /> <br />
                                        <input name="username" placeholder="Username" value={this.state.user["username"]} onChange={this.handleusernameChange.bind(this)} /> <br />
                                        <input name="gender" placeholder="Gender" value={this.state.user["gender"]} onChange={this.handleChange.bind(this)} /> <br />
                                        <input name="headline" placeholder="Headline" value={this.state.user["headline"]} onChange={this.handleChange.bind(this)} /> <br />
                                        <label htmlFor="story">Story</label><br />
                                        <textarea name="story" value={this.state.user["story"]} onChange={this.handleChange.bind(this)} /><br />
                                        <button>Submit</button>
                                    </form>
                                </div>
                                <div className="actions">
                                    <button className="button" onClick={() => { close(); }}>
                                        close modal
                                    </button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
                {this.items}
            </div>
        );
    }
}
