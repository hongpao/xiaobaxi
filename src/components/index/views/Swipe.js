/**
 * Created by hongpao on 2018/3/23.
 */

import ReactSwipe from 'react-swipes';

const Swipe = (props) => {
    let opt = {
        // distance: 620, // 每次移动的距离，卡片的真实宽度
        // currentPoint: 1,// 初始位置，默认从0即第一个元素开始
        autoPlay: true // 是否开启自动播放
    };

    return (
        <div>
            <ReactSwipe className="swipe" options={opt}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </ReactSwipe>
        </div>
    );
};

export default Swipe;