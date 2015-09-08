import './navtree.less';
import React from 'react';

var Navtree = React.createClass({
    render() {
        return (
            <section className="navtree">
                <header>
                    <h2 className="title">
                        艾玛
                    </h2>
                    <div className="user">
                        <a href="#" className="nav-accounts">登录/注册</a>
                    </div>
                </header>
                <div className="nav-wrap">
                    <div className="search">
                        <form action="">
                            <input type="text" name="search_text" placeholder="电影,导演,影片类型" />
                            <input type="hidden" name="cat" value="1002" />
                            <button className="close-search">取消</button>
                        </form>
                    </div>
                    <h6>ceshi</h6>
                    <ul>
                        <li><a href="#">1234</a></li>
                        <li><a href="#">5678</a></li>
                        <li><a href="#">abcd</a></li>
                        <li><a href="#">efgh</a></li>
                        <li><a href="#">分类</a></li>
                        <li><a href="#">haoa</a></li>
                        <li><a href="#">test</a></li>
                        <li><a href="#">mmda</a></li>
                    </ul>
                </div>
            </section>
        )
    }
});

export default Navtree;
