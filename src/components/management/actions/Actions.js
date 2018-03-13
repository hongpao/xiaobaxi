/**
 * Created by hongpao on 2018/3/13.
 */

import AppDispatcher from '../../../dispatcher/AppDispatcher';
import AppConstants from '../../../constants/AppConstants';

import saveInfo from '../apis/saveInfoApi';

const ManagementActions = {

    /*
    * 更改标题
    * 类型：1
    * */
    changeTitle(e) {
        let title = e.target.value;
        AppDispatcher.dispatch({
            actionType: AppConstants.CREATE_INFO,
            data: {type: 1, title: title}
        });
    },

    /*
    * 更改标签
    * 类型：2
    * */
    changeTag(e) {
        let tag = e.target.value;
        AppDispatcher.dispatch({
            actionType: AppConstants.CREATE_INFO,
            data: {type: 2, tag: tag}
        });
    },

    /*
    * 增加标签
    * */
    addTag() {
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_TAG,
        });
    },

    /*
    * 删除标签
    * */
    deleteTag(tagName) {
        AppDispatcher.dispatch({
            actionType: AppConstants.DELETE_TAG,
            data: {tagName: tagName}
        });
    },

    /*
    * 提交保存
    * */
    submit(createInfo, content) {
        createInfo.content = content;
        saveInfo(createInfo, {
            success: function (result) {
                if (result.code === 1) {
                    let data = result.data || {};
                }
            }
        });
    }
};

export default ManagementActions;