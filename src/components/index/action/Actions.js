/**
 * Created by hongpao on 2018/3/23.
 */

import AppDispatcher from '../../../dispatcher/AppDispatcher';
import AppConstants from '../../../constants/AppConstants';

import getBanner from '../apis/getBannerApi';

const IndexAction = {

    /*
    * 获取banner图片地址
    * */
    getBannerImagePath() {
        getBanner({
            success: function (result) {
                if (result.code === 1) {
                    AppDispatcher.dispatch({
                        actionType: AppConstants.BANNER_IMAGE,
                        data: result.path
                    });
                }
            }
        });
    }
};

export default IndexAction;