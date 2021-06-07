import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "react-native-styled-paper/components/Typography";
import useWindowSize from "react-native-styled-simple-hooks/hooks/useWindowSize/useWindowSize";

const UseWindowSizeExample = (props) => {

    const { isMobileView } = useWindowSize();

    React.useEffect(() => {
        console.log("effected");
    }, [isMobileView])

    return (
        <>
            <Text>{`Is mobile view? ${isMobileView}`}</Text>
        </>
    )
}

storiesOf("useWindowSize", module)
    .add("Default", () => {

        return (
            <UseWindowSizeExample />
        )
    })