import React, { Component } from 'react'

export default class HowTo extends Component {
    render() {
        return (
            <div className="HowTo">
                <div className="headerDivs">
                    <h1>Sharing your story</h1>
                </div>
                <div className="about">
                <p>Sharing your valentine story on Val Memoirs is easy!<br/>
                    Just follow the steps below:
                    </p>
                    <ul>
                        <li>Click the button above to add a story</li>
                        <li>A form will appear where you can fill in your details and story</li>
                        <li>After you have completed the form, your can view your story along with the other stories on Val Memoirs. Congratulations!</li>
                    </ul>
                    <p style={{color:'#ff0000b5'}}>NOTE: YOU CANNOT UPLOAD MORE THAN ONE STORY AS A SINGLE USER</p>
                </div>
            </div>
        )
    }
}
