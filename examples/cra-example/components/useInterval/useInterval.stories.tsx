import * as React from "react";
import { storiesOf } from "@storybook/react";
import useInterval from "react-native-styled-simple-hooks/hooks/useInterval";

storiesOf("useInterval", module)
    .add("Default", () => {

        const [seconds, setSeconds] = React.useState(0);
   
        // repeat the function each 1000ms
        useInterval(() => {
            setSeconds(1 + seconds);
        }, 1000);
        
        return (
            <div>
                <p>Rendering since {seconds} seconds</p>
            </div>
        );
    })