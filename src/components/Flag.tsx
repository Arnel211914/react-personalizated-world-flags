import React from "react";
import useFlags from "../hooks";
import { FlagProps } from "../interfaces";

const Flag = (props: FlagProps) => {
    const { code } = props;
    const flagName = code.toUpperCase();
    const flag = useFlags[flagName];

    return (
        <img src={flag}/>
    );
}

export default Flag;