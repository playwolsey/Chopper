import './component.less';
import React from 'react';

var Hello = React.createClass({
    render() {
        return (
            <div className="component-wrap">
                <h1>Hello world</h1>
            </div>
        )
    }
});

export default Hello;
