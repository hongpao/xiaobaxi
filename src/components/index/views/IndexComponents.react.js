/**
 * Created by hongpao on 2018/3/23.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

import Navigation from '../../common/views/Navigation';
import Footer from '../../common/views/Footer';

import IndexAction from '../action/Actions';
import IndexStore from '../store/Stores';

import Swipe from './Swipe';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

class IndexComponents extends Component {
    constructor(props) {
        super(props);
        this.state = IndexStore.getNewData();
    }

    componentDidMount() {
        IndexStore.addChangeListener(this._onChange);
        IndexAction.getBannerImagePath();
    }

    componentWillUnmount() {
        IndexStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState(IndexStore.getNewData());
    };


    render() {
        return (
            <div className="whole-main">
                <Navigation/>
                <Swipe bannerImagePath={this.state.bannerImagePath}/>
                <div className="whole-content clearfix">
                    <LeftBox/>
                    <RightBox/>
                </div>
                <Footer/>
            </div>
        );
    }
}

function init() {
    const root = document.getElementById('J-index');
    if (root) {
        render(<IndexComponents/>, root);
    }
}

export default {init: init};