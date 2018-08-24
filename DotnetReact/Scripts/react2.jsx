import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

ReactDOM.render(
    <Button variant="contained" color="primary">
        Hello World from javascript
    </Button>,
    document.getElementById("app2")
);

if (module['hot']) {
    module['hot'].accept();
} 