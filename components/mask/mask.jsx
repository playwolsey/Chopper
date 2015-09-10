import React from 'react';
import './mask.less';

const Mask = React.createClass({
    render() {
        return (
            <div className="mask" onClick={this.props.onHideNav}></div>
        )
    }
});

export default Mask;
