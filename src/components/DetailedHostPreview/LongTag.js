import React from 'react'
import styles from './local.module.css';

export default function LongTag(tag) {
    return (
        <div className={styles.longTag}>
            {tag.children}
        </div>
    );
}