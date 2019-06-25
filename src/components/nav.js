import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "slider",
        };      
    }

    onMenuClick = (event) => {
        if (this.state.id === "slider"){
            this.setState({id: "sliderOut"});
        }
        else (this.setState({id: "slider"}));
    }





    render () {
        return (
            <nav id="navigation">
            <div >
            <a onClick={this.onMenuClick}>Menu</a>
                 <div id={this.state.id}>
                        <a id="myStory" onClick={this.scrollToContent}>My Story</a>
                        <a id="portfolio">Portfolio</a>
                        <a id="contact">Contact</a>
                </div>
            </div>
            </nav>

        );
        }
}
