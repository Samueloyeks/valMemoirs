import React, { Component } from 'react';
import HowTo from '../components/pages/howTo';
import Stories from '../components/pages/stories';
import scrollToComponent from 'react-scroll-to-component';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Slideshow from '../components/slideshow';


export default class mainView extends Component {

    render() {
        return (
            <div className="MainView">
                <StickyHeader className="header"
                    header={
                        <div className="Header_root">
                            <h1 className="Header_title" onClick={() =>{window.scrollTo({top:0,left:0,duration: 500,offset: 0,});}}>VAL-MEMOIRS</h1>

                            <ul className="Header_links">
                                <li className="Header_link" onClick={() => { scrollToComponent(this.HowTo, { offset: 0, align: 'top', duration: 500 }) }} >How to share</li>
                                <li className="Header_link" onClick={() => { scrollToComponent(this.Stories, { offset: 0, align: 'top', duration: 500 }) }} >Stories</li>
                            </ul>
                        </div>
                    }>
                    <section className="section">
                    <Slideshow />
                    </section>
                </StickyHeader><br/>
                <Stories scrollToTop={this.scrollToTop} ref={(Stories) => { this.Stories = Stories; }} />
                <HowTo scrollToTop={this.scrollToTop} ref={(HowTo) => { this.HowTo = HowTo; }} />
            </div>
        )
    }
}
