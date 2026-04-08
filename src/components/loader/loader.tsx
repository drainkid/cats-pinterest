import React from "react";
import styles from './loader.module.css';

type loaderProps = {
    children?: React.ReactNode;
}
export const Loader = ({children}:loaderProps) => {
    return (
        <>
            <p className={styles.loader}>{children}</p>
        </>
    );
};

