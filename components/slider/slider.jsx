import React from 'react';
import './slider.less';

const Slider = React.createClass({
    handleEvent(e) {
        switch (e.type) {
            case 'touchstart':
                this.start(e);
                break;
            case 'touchmove':
                this.move(e);
                break;
            case 'touchend':
            case 'touchcancel':
                this.end(e);
                break;
            case 'webkitTransitionEnd':
            case 'msTransitionEnd':
            case 'oTransitionEnd':
            case 'transitionend':
                this.transitionEnd(e);
                break;
        }
    },

    start() {
        console.log('start');
    },

    move() {
        console.log('move');
    },

    end() {
        console.log('end');
    },

    loadImg(n) {
        n = n || 0;
    },

    getImg(obj) {
        if (!obj) {
            return;
        }

        if (obj.getAttribute('l')) {
            return;
        }

        let img = document.querySelector(obj).querySelector('img.lazy');
        let src = img.getAttribute('data-img');
        if (src) {
            img.setAttribute('src', src).removeAttribute('data-img');
            img.classList.removeClass('lazy');
        }

        obj.setAttribute('l', '1');
    },

    propTypes: {
        hasTransform: React.PropTypes.func,
        has3d: React.PropTypes.func
    },

    getDefaultProps() {
        return  {
            // transform is supported in browser (only webkit)
            hasTransform: function() {
                return ('WebkitTransform' in document.documentElement.style) ? true: false;
            },

            // 3d is supported in browser (only webkit)
            has3d: function() {
                let result = false;
                let div = document.createElement('div');
                let divInnerStyle = ['&#173;', '<style id="smodernizr">', '@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', '</style>'].join('');

                div.id = 'modernizr';
                div.innerHTML += divInnerStyle;

                document.body.appendChild(div);

                let mStyle = document.documentElement.style;
                if ('WebkitPerspective' in mStyle && 'webkitPerspective' in mStyle) {
                    result = (div.offsetLeft === 9 && div.offsetHeight === 3);
                }

                div.parentNode.removeChild(div);

                return result;
            }
        }
    },

    getInitialState() {
        return {
            ads: [],

            hasTrigger: false,  //是否需要触发事件，例tab页签就需要click触发
            steps: 0,  //步长，每次滑动的距离
            left: 0,  //panel初始的x坐标
            visible: 1,  //每次滑动几个panels，默认1
            margin: 0,  //面板元素内子元素间的间距
            curIndex: 0,  //初始化在哪个panels上，默认0为第一个
            duration: 300,  //动画持续时间
            loop: false,  //动画循环
            play: false,  //动画自动播放
            interval: 5000,  //播放间隔时间，play为true时才有效
            useTransform: this.props.has3d ? true : false, //以translate方式动画，安卓现在也支持了

            lazyIndex: 1,  //默认加载到第几屏
            callback: null, //动画结束后触发

            fullScreen: 0, //全屏支持 如果开启全屏 css中设置的宽度将失效
            sizeRadio: 120/320, //只有开启fullScreen 此项配置才生效 图片比例 高／宽

            prev: null,  //上一页
            next: null,  //下一页
            activePnCls: 'none'  //prev和next在头尾时的样式
        };
    },

    componentWillMount() {
        this.loadImg();
    },
    
    componentDidMount() {
        let request = new XMLHttpRequest();
        let _this = this;

        request.open('GET', this.props.source, true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                _this.setState({ads: JSON.parse(request.responseText).ads});
            } else {
            }
        };

        request.send();
    },
    
    render() {
        let content = this.state.ads.map((res, index) => {
            return (
                <li>
                    <a href={res.target}>
                        <img data-img={res.img} src="http://b0.hucdn.com/img/h5/s.gif" className="lazy" alt={index}/>
                    </a>
                </li>
            )
        });

        return (
            <section className="slider">
                <div className="slider-outer">
                    <ul className="slider-wrap">{content}</ul>
                </div>
                <div className="slider-status"></div>
            </section>
        )
    }
});

export default Slider;
