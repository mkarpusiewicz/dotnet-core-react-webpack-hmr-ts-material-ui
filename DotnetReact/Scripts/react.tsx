import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from '@material-ui/core';


import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

function App1() {
    return (
        <Button variant="contained" color="primary">
            Hello World from Typescript
    </Button>
    );
}

ReactDOM.render(<App1 />, document.querySelector('#app1'));

if (module['hot']) {
    module['hot'].accept();
}  