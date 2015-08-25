import '../../css/common/reset.less';
import React from 'react';
import Hello from '../../components/hello/component.jsx';

;(function() {
    React.render(
        <Hello />,
        document.getElementById('app')
    );
})();
