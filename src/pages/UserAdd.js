/**
 * Created by zhongpeipei on 2017/3/20.
 */
import React from 'react';
import formProvider from '../utils/formProvider';
import FormItem from '../components/FormItem';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from './../components/UserEditor';
class UserAdd extends React.Component {
  // handleSubmit(e) {
  //       // 阻止表单submit事件自动跳转页面的动作
  //     e.preventDefault();
  //     const {form: {name, age, gender} , formValid} = this.props;
  //     if (!formValid) {
  //         alert('请填写正确的信息后重试');
  //         return;
  //     }
  //   // alert(JSON.stringify(this.state));
  //     fetch('http://localhost:8002/user', {
  //         method: 'post',
  //         body: JSON.stringify({
  //             name: name.value,
  //             age: age.value,
  //             gender:gender.value ,
  //         }),
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //         .then((res) => res.json())
  //         .then((res) => {
  //             if (res.id) {
  //                 alert('yes!');
  //                 this.context.router.push('/user/list');
  //             }else {
  //                 alert('添加失败');
  //             }
  //         })
  //         .catch((err) => console.error(err));
  // }
  // handleValueChange(name, value, type) {
  //     console.log(12);
  // }
  render() {
    return (
        <HomeLayout title = "添加用户">
        <main>
          <UserEditor />
        </main>
      </HomeLayout>
    );
  }
}
//
// UserAdd.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// UserAdd = formProvider({
//     name: {
//         defaultValue: '',
//         rules: [
//             {
//                 pattern: function (value) {
//                     return value.length > 0;
//                 },
//                 error: '请输入用户名'
//             },
//             {
//                 pattern: /^.{1,4}$/,
//                 error: '用户名最多4个字符'
//             }
//
//         ],
//         valid:false,
//     },
//     age: {
//         defaultValue: '',
//         rules: [
//             {
//                 pattern: function (value) {
//                     return value > 0;
//                 },
//                 error: '请输入正确的年龄'
//             }
//         ],
//         valid:false,
//     },
//     gender: {
//         defaultValue: 'male',
//         rules: [
//             {
//                 pattern: function (value) {
//                     return value;
//                 },
//                 error: '请输入正确的性别'
//             }
//         ],
//         valid:true,
//     }
//
// })(UserAdd);
export default UserAdd;
