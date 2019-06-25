import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Header from '../components/header'
import '../App.scss';



const fadeImages = [];
const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
}

class Slideshow extends Component {

    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    async componentDidMount() {
        const client_id = "bc060ee954b31a5ec6ed79b77a1624cc8c001c175f419a05494cac7c8e5076d5"
        const url = "https://api.unsplash.com/photos/search";
        const response = await fetch(`${url}?client_id=${client_id}&query=romance&count=5`, {
            method: "GET",
            MODE: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        const data = await response.json();
        console.log(data)
        for (let i = 0; i < 5; i++) {
            fadeImages.push(data[i].urls.regular)
        }
        console.log(fadeImages)
        this.setState({ loading: false })
    }


    render() {
        return (
            <div>
                {this.state.loading ? <div>loading...</div> :
                    <div>
                        <Fade {...fadeProperties}>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={fadeImages[0]} className="slideshowImage" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={fadeImages[1]} className="slideshowImage" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={fadeImages[2]} className="slideshowImage" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={fadeImages[3]} className="slideshowImage" />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={fadeImages[4]} className="slideshowImage" />
                                </div>
                            </div>
                        </Fade>
                    </div>}
            </div>
        )
    }
}
export default Slideshow;