import React, { Component } from "react";
import Avatar from "react-avatar";
import Popup from "reactjs-popup";

import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';



export default class stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
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
                    username: "Sam",
                    title: "Cool Story",
                    body: "story body",
                    likes: 0,
                    datePosted: '2019/6/26',
                    timePosted: '08:00AM',
                },
                {
                    id: 2,
                    firstName: "Dave",
                    lastName: "Brooks",
                    username: "Dave",
                    title: "Cool Story",
                    body: "story body",
                    likes: 0,
                    datePosted: '2019/6/26',
                    timePosted: '11:00AM',
                },
                {
                    id: 3,
                    firstName: "Jessie",
                    lastName: "Adams",
                    username: "Jess",
                    title: "Cool Story",
                    body: "story body",
                    likes: 0,
                    datePosted: '2019/6/26',
                    timePosted: '02:00PM',
                },
                {
                    id: 4,
                    firstName: "Joshua",
                    lastName: "Peters",
                    username: "Josh",
                    title: "Cool Story",
                    body: "story body",
                    likes: 0,
                    datePosted: '2019/6/26',
                    timePosted: '11:00AM',
                },
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
    handlestoryChange(event) {
        event.preventDefault();
        let user = this.state.user;
        let name = event.target.name;
        let value = event.target.value;

        this.state.count = event.target.value.length


        user[name] = value;
        this.setState({ user })
    }

    addStory(e) {
        e.preventDefault();
        this.setState({showModal:false})
        this.duplicate = false
        for (let i = 0; i < this.state.savedUsers.length; i++) {
            if (this.state.savedUsers[i].username !== '' && this.state.user.username === this.state.savedUsers[i].username)
                this.duplicate = true

        }
        if (!this.duplicate) {
            if (this.state.user.username == '') {
                this.state.user.username = 'Anonymous'
            }
            var d = new Date();
            var time = this.formatAMPM(d)
            this.state.stories.push({
                'id': this.state.stories.length + 1,
                'firstName': this.state.user.firstName,
                'lastName': this.state.user.lastName,
                'username': this.state.user.username,
                'title': this.state.user.headline,
                'body': this.state.user.story,
                'likes': 0,
                'datePosted': d.getFullYear() + '/' + (d.getMonth() + 1) + "/" + d.getDate(),
                'timePosted': time,
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
                user: {
                    firstName: '',
                    lastName: '',
                    username: '',
                    gender: '',
                    headline: '',
                    story: '',
                }
            })
            this.setState({ count: 0 })
            toast.notify("Story Added",{
                duration: 2000,
                position:'bottom'
            });
        } else {
            alert('Sorry ' + this.state.user.username + ", you have already posted a story.")
        }
    }
    addLike(key) {
        let newCount = this.state.stories[key]['likes'] + 1
        let story = this.state.stories[key]
        story['likes'] = newCount
        this.setState({
            story
        })
    }
    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    


    render() {
        this.items = this.state.stories.map((story, key) => {
            return <div className="storyContainer" key={key}>
                <Avatar name={story.firstName + " " + story.lastName} round={true} style={{ padding: 10 }} />
                <h4 style={{ fontSize: 40 }}>{story.title}</h4><br />
                <h5>Posted by {story.username} on {story.datePosted} at {story.timePosted}</h5>
                <a onClick={() => { this.addLike(key) }} className="likeLink">Likes: {story.likes}</a><br />
                <p text-wrap="true">
                    {((story.body).length > 100) ?
                        (((story.body).substring(0, 100 - 3)) + '...') :
                        story.body}
                </p>

                <Popup
                    trigger={<button className="button"> READ MORE </button>} modal>
                    {close => (
                        <div className="modal">
                            <a onClick={close}>
                                &times;
                            </a><br />
                            <div className="modal_header">{story.title}</div><br />
                            <div className="content">
                                <h5 style={{ color: 'blue' }}>Posted by {story.username} on {story.datePosted} at {story.timePosted}</h5>
                                <div className="actions">
                                    <button onClick={() => { this.addLike(key) }}>Likes: {story.likes}</button>
                                </div>
                                <p> {story.body}</p>
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
                </div><br />
                <div className="horizontalScroll">
                    {this.items}
                </div>
                <div className="addStoryDiv">
                    <h3>Share your valentine story</h3>
                    <Popup id="popup"
                        trigger={<button className="button">+</button>} modal>
                        {close => (
                              <div className="modal">
                              <a onClick={close}>
                                  &times;
                              </a><br />
                              <div className="modal_header">Add your story</div>
                              <div className="content">
                                  <form id="form" onSubmit={this.addStory.bind(this)}>
                                      <input name="firstName" placeholder="First Name" value={this.state.user["firstName"]} onChange={this.handleChange.bind(this)} /> <br />
                                      <input name="lastName" placeholder="Last Name" value={this.state.user["lastName"]} onChange={this.handleChange.bind(this)} /> <br />
                                      <input name="username" placeholder="Username" value={this.state.user["username"]} onChange={this.handleusernameChange.bind(this)} /> <br />
                                      <select name="gender" placeholder="Gender" value={this.state.user["gender"]} onChange={this.handleChange.bind(this)}>
                                          <option>Male</option>
                                          <option>Female</option>
                                      </select><br />
                                      <input required name="headline" placeholder="Headline" value={this.state.user["headline"]} onChange={this.handleChange.bind(this)} /> <br />
                                      <label htmlFor="story">Story</label><br />
                                      <textarea required name="story" value={this.state.user["story"]} onChange={this.handlestoryChange.bind(this)} /><br />
                                      <p ><span>{this.state.count}</span></p>
                                      <button>Submit</button>
                                  </form>
                              </div>
                              <div className="actions">
                              </div>
                          </div>
                        )}
                    </Popup>
                </div>
            </div>
        );
    }
}
