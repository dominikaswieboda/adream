import React, {useRef} from "react";
import Link from 'gatsby-link'

export function Button({link, classname, children, reference, ...props}) {
    const isReference = useRef(reference);
    const currentReference = isReference.current;
    return(
        link ? <Link className={classname} to={link} {...props}>{children}</Link> : <button className={classname} ref={currentReference} {...props}>{children}</button>
    )
}