/**
 * Created by zhongpeipei on 2017/4/6.
 */
import React from 'react';
class FormItem extends React.Component {
    render() {
      const {label, valid, error, children} = this.props;
      return (
          <div>
              <label>{label}</label>
              {children}
              {!valid && <span>{error}</span>}
              <br />
          </div>
      )
    }
}
export default FormItem;