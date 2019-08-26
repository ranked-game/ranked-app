// Core
import React from 'react';

// Styles
import Styles from './styles.module.scss';

const Spinner = ({ className, size, children }) => (
    <section
        className={`${Styles.container} ${className}`}
        style={{
            height: size,
            width: size,
        }}
    >
        <div className={Styles.spinner} />
        <div className={Styles.children}>{children}</div>
    </section>
);

export default Spinner;
