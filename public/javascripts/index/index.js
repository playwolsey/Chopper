import '../../css/common/reset.less';
import React from 'react';
import Navbar from '../../components/navbar/navbar.jsx';

;(function() {
    React.render(
        <Navbar />,
        document.getElementById('app')
    );
})();
