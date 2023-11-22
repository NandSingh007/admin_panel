import React from 'react';
import styles from '../Account/css/Input.module.css';
const InputTeg = ({ ...props }) => {
    return (
        <>
            <div className={styles.ContainerInput}>
                {/* Render label if it is provided */}
                {/* {label && <label>{label}</label>} */}
                <input type="text" value={''} {...props} /> {/* Render input element */}
            </div>
        </>
    );
};

export default InputTeg;
