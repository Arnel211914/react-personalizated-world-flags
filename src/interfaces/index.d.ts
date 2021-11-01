import { LazyExoticComponent, ReactElement } from "react";

export interface FlagProps {
    code: string,
    rounded: boolean
}

export interface FlagsHook {
    CO: () => ReactElement
}