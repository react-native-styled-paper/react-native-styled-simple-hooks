import { Dimensions } from "react-native";

export function viewMeasureCallback(myview, effect) {
    myview.measure((x, y, width, height, pageX, pageY) => {
        const window = Dimensions.get("window");

        const rectTop = pageY,
            rectBottom = pageY + height,
            rectWidth = pageX + width;

        const isVisible =
            rectBottom !== 0 &&
            rectTop >= 0 &&
            rectBottom <= window.height &&
            rectWidth > 0 &&
            rectWidth <= window.width;

        effect(isVisible, {
            x,
            y,
            width,
            height,
            pageX,
            pageY,
        });
    });
}
