/**
 * Created by hongpao on 2018/3/23.
 */

import ReactSwipe from 'react-swipe';

const Swipe = (props) => {
    let {bannerImagePath} = props;
    let opt = {
        startSlide: 0,
        speed: 500,
        auto: 3000,
        continuous: true
    };

    return (
        <ReactSwipe className="swipe" swipeOptions={opt}>
            {
                bannerImagePath.map((item, index) => {
                    return (
                        <div className="bannerBg" style={{backgroundImage: 'url(' + item.path + ')'}}>

                        </div>
                    );
                })
            }
        </ReactSwipe>
    );
};

export default Swipe;