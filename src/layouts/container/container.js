import React from "react";
import * as styles from './container.module.scss';

const Container = ({children, classname}) => (
  <div className={`${styles.container} ${classname}`}>
      {children}
  </div>
)

export default Container;