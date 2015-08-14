import './main.css';
import React from 'react';
import Hello from './component.jsx';

;(function() {
    React.render(
        <Hello />,
        document.getElementById('app')
    );
})();
