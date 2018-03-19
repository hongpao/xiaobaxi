/**
 * Created by hongpao on 2018/3/13.
 */

import AppDispatcher from '../../../dispatcher/AppDispatcher';
import AppConstants from '../../../constants/AppConstants';

import saveInfo from '../apis/saveInfoApi';
import uploadFile from '../apis/uploadFileApi';

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
    },

    /*
    * 上传图片
    * */
    uploadImage() {
        let form = new FormData();
        let file = document.getElementsByName("Multiple")[0];

        //获取选中资源的数组
        let fileList = file.files;

        let item = fileList[0];
        let fileType = item.type.toLocaleLowerCase();

        //符合格式的后缀
        let imageFormat = ['image/png', 'image/jpeg', 'image/gif'];

        if (imageFormat.indexOf(fileType) > -1) {
            form.append('image', item);

            uploadFile({
                data: form,
                success: function (result) {
                    if (result.code === 1) {
                        AppDispatcher.dispatch({
                            actionType: AppConstants.CREATE_INFO,
                            data: {type: 3, faceImagePath: result.path}
                        });
                    }
                }
            });
        }
    }
};

export default ManagementActions;