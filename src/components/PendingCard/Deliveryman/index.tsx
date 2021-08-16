import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import styles from '../styles.module.scss'

export default function PendingDeliveryman() {
    return(
        <div className={styles.container}>
            <FontAwesomeIcon icon="user-circle" className={styles.profile} />

            <div className={styles.info}>
                <strong>Willian Sandro Vieira</strong>
                <span>(18) 9 9874-5656</span>
                <span>Rua Castro Alves, 1 - Assis SP</span>
            </div>

            <button>Avaliar</button>
        </div>
    )
}