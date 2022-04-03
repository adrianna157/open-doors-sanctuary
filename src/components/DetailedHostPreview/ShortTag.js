import React from 'react'
import styles from './local.module.css';

export default function ShortTag(tag) {
    return (
        <div className={styles.shortTag}>
            {tag.children}
        </div>
    );
}