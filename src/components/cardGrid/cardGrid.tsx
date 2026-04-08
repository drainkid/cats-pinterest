import styles from './cardGrid.module.css';
import React from "react";


type CatGridProps = {
  children?: React.ReactNode;
};


export const CardGrid = ({ children }: CatGridProps) => {

  return (
    <section className={styles.grid}>
      {children}
    </section>
  )
};

