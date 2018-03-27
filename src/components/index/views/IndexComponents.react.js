/**
 * Created by hongpao on 2018/3/23.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

import Navigation from '../../common/views/Navigation';

import IndexAction from '../action/Actions';
import IndexStore from '../store/Stores';

import Swipe from './Swipe';

class IndexComponents extends Component {
    constructor(props) {
        super(props);
        this.state = IndexStore.getNewData();
    }

    componentDidMount() {
        IndexStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        IndexStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        // this.setState(ManagementStore.getNewData());
    };


    render() {
        return (
            <div className="whole-main">
                <Navigation/>
                <Swipe bannerImagePath={this.state.bannerImagePath}/>
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