import React from "react";
import useFlags from "../hooks";
import { FlagProps } from "../interfaces";

const Flag = (props: FlagProps) : JSX.Element => {
    const { code } = props;
    const flagName = code.toUpperCase();
    const FlagComponent = useFlags()[flagName];


    return (
        <FlagComponent {...props}></FlagComponent>
    );
}

export default Flag;