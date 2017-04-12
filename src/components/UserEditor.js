/**
 * Created by zhongpeipei on 2017/4/6.
 */
import React from 'react';
import formProvider from '../utils/formProvider';
import FormItem from './FormItem';
import HomeLayout from '../layouts/HomeLayout';
class UserEditor extends React.Component {
    componentWillMount() {
        const {editTarget, setFormValues} = this.props;
        if (editTarget) {
            setFormValues(editTarget);
        }
    }
    handleSubmit(e) {
        // 阻止表单submit事件自动跳转页面的动作
        e.preventDefault();
        const {form: {name, age, gender} , formValid, editTarget} = this.props;
        if (!formValid) {
            alert('请填写正确的信息后重试');
            return;
        }
        let editType = '添加';
        let method = 'post';
        let aqiUrl = 'http://localhost:8002/user';
        if (editTarget) {
            editType = '编辑';
            aqiUrl += '/' +  editTarget.id;
            method = 'put';
        }
        fetch(aqiUrl, {
            method: method,
            body: JSON.stringify({
                name: name.value,
                age: age.value,
                gender:gender.value ,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.id) {
                    alert(editType + 'yes!');
                    this.context.router.push('/user/list');
                    return;
                }else {
                    alert('添加失败');
                }
            })
            .catch((err) => console.error(err));
    }
    render() {
        const { form:{ name, age, gender }, onFormChange} = this.props;
        return (
            <HomeLayout>
                <main>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <FormItem label = "用户名：" valid={name.valid} error={name.error} >
                            <input type="text" value={name.value} onChange={e => onFormChange('name', e.target.value)} />
                        </FormItem>
                        <FormItem label="年龄："  valid = {age.valid} error = {age.error} >
                            <input type="number" value={age.value || 0} onChange={e => onFormChange('age', e.target.value, 'number')} />
                        </FormItem>
                        <FormItem label="性别：" valid = {gender.valid} error = {gender.error} >
                            <select value={gender.value} onChange={(e) => onFormChange('gender', e.target.value)}>
                                <option value="">请选择</option>
                                <option value="male">男</option>
                                <option value="female">女</option>
                            </select>
                        </FormItem>
                        <input type="submit" value="提交" />
                    </form>
                </main>
            </HomeLayout>
        );
    }
}
// UserAdd.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
UserEditor.contextTypes = {
    router: React.PropTypes.object.isRequired
}
UserEditor = formProvider({
    name: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return value.length > 0;
                },
                error: '请输入用户名'
            },
            {
                pattern: /^.{1,4}$/,
                error: '用户名最多4个字符'
            }

        ],
        valid:false,
    },
    age: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return value > 0;
                },
                error: '请输入正确的年龄'
            }
        ],
        valid:false,
    },
    gender: {
        defaultValue: 'male',
        rules: [
            {
                pattern: function (value) {
                    return value;
                },
                error: '请输入正确的性别'
            }
        ],
        valid:true,
    }

})(UserEditor);
export default UserEditor;
