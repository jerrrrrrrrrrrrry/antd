import React, {Component} from 'react'
import {Carousel} from 'antd';
import fuwu from '@/image/fuwu.jpg';


export default class Banner extends Component {
/*    state = {
        imgHeight: '3201',
    };*/


    render() {
        return (
            <Carousel className="banner" effect="fade" autoplay >
                <div><h3><img
                        /*onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}*/
                    src={fuwu}/></h3></div>
{/*                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>*/}
            </Carousel>
        );

    }
}