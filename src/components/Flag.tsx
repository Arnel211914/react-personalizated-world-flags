import React from "react";
import { FlagProps } from "../interfaces";

const Flag = (props: FlagProps) => {
    const { text } = props;

    return (
        <h1>{ text }</h1>
    );
}

export default Flag;