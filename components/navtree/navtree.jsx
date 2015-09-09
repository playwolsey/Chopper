import './navtree.less';
import React from 'react';

var Navtree = React.createClass({
    render() {
        return (
            <section className="navtree hidden" style={{height:this.props.height}}>
                <header>
                    <h2 className="title">
                        艾玛
                    </h2>
                    <div className="user">
                        <a href="javascript:void(0);" className="nav-accounts">登录/注册</a>
                    </div>
                </header>
                <div className="nav-wrap" style={{height:this.props.height}}>
                    <div className="search">
                        <form action="https://api.douban.com/v2/movie/search?q=">
                            <input type="text" name="search_text" placeholder="电影,导演,影片类型" />
                            <input type="hidden" name="cat" value="1002" />
                        </form>
                    </div>
                    <h6>ceshi</h6>
                    <ul>
                        <li><a href="javascript:void(0);">1234</a></li>
                        <li><a href="javascript:void(0);">5678</a></li>
                        <li><a href="javascript:void(0);">abcd</a></li>
                        <li><a href="javascript:void(0);">efgh</a></li>
                        <li><a href="javascript:void(0);">分类</a></li>
                        <li><a href="javascript:void(0);">haoa</a></li>
                        <li><a href="javascript:void(0);">test</a></li>
                        <li><a href="javascript:void(0);">mmda</a></li>
                    </ul>
                </div>
            </section>
        )
    }
});

export default Navtree;
