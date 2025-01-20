import React from "react";
import styles from "./Input.module.css";

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <input className={styles.input} value={value} onChange={onChange} />
    );
}; 