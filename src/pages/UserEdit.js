/**
 * Created by zhongpeipei on 2017/4/7.
 */
import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserEdit extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: null,
        }
    }
    componentWillMount() {
        const userId = this.context.router.params.id;
        fetch('http://localhost:8002/user/' + userId)
            .then(res => res.json())
            .then(res => {
                console.log('res', res);
                this.setState({
                    user: res
                });
            });
    }
    render() {
        const { user } = this.state;
        return (
            <HomeLayout title='编辑用户'>
                {
                    user?<UserEditor editTarget = {user} />: '加载中。。。'
                }
            </HomeLayout>
        )
    }
}
UserEdit.contextTypes = {
    router:React.PropTypes.object.isRequired
}
export default UserEdit;