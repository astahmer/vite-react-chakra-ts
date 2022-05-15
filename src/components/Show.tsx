import { WithChildren } from "pastable";
import { ReactElement } from "react";

export function Show({ cond, children }: WithChildren & { cond: boolean }): ReactElement | null {
    return cond ? (children as ReactElement) : null;
}
