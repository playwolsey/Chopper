import React from 'react';

const Modal = React.createClass({
    propTypes: {
        type: React.PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading'])

        title: React.PropTypes.node,
        confirmText: React.PropTypes.string,
        cancelText: React.PropTypes.string,

        close: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            confirmText: '确定',
            cancelText: '取消',

            close: true
        }
    },

    getInitialState() {
        return {
        }
    },

    componentWillMount() {
    },

    componentDidMount() {
    },

    renderHeader() {
    //var closeIcon = this.props.closeIcon && !this.props.type ? (
    //  <Close
    //    spin
    //    onClick={this.props.onRequestClose}/>) : null;
        return (this.props.title || closeIcon) ?
            (
                <header className="hd">
                    {this.props.title ? <h4 className="title">{this.props.title}</h4> : null}
                </header>
                {closeIcon}
            ) : 
            null;
    },

    renderFooter() {
        let footer = null;

        return footer ?
            (
                <footer className="ft">
                    {footer}
                </footer>
            ) :
            null;
    },

    render() {
        let style = {
            display: 'block',
            width: this.props.modalWidth,
            height: this.props.modalHeight,
            marginLeft: this.props.marginLeft,
            marginTop: this.props.marginTop
        };
        let header = this.renderHeader();
        let footer = this.renderFooter();

        return (
            <div style={style} ref="modal" className="modal">
                <div className="dialog">
                    {header}
                    <div className="bd">
                    </div>
                    {footer}
                </div>
            </div>
        )
    }
});

export default Modal;
