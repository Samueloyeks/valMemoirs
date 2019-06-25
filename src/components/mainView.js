import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HowTo from '../components/pages/howTo';
import Stories from '../components/pages/stories';
import scrollToComponent from 'react-scroll-to-component';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Slideshow from '../components/slideshow';


export default class mainView extends Component {
    constructor(props) {
        super(props);
        this.HowTo = React.createRef();
        this.Stories = React.createRef();

        this.scrollToContent = this.scrollToContent.bind(this);
    }

    scrollToContent(content) {
        switch (content) {
            case 1:
                this.HowTo.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 2:
                this.Stories.current.scrollIntoView({ behavior: 'smooth' });
        }

    }
    render() {
        return (
            <div className="MainView">
                <StickyHeader className="header"
                    header={
                        <div className="Header_root">
                            <h1 className="Header_title">VAL MEMOIRS</h1>

                            <ul className="Header_links">
                                <li className="Header_link" onClick={() => { scrollToComponent(this.HowTo, { offset: 0, align: 'top', duration: 500 }) }} >How to share</li>
                                <li className="Header_link" onClick={() => { scrollToComponent(this.Stories, { offset: 0, align: 'top', duration: 500 }) }} >Stories</li>
                            </ul>
                        </div>
                    }>
                    <section style={{height:180}}>
                    {/* <Slideshow/> */}
                    </section>
                </StickyHeader>
                <Stories scrollToTop={this.scrollToTop} ref={(Stories) => { this.Stories = Stories; }} />
                <HowTo scrollToTop={this.scrollToTop} ref={(HowTo) => { this.HowTo = HowTo; }} />
            </div>
        )
    }
}
