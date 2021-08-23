import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import styles from '../styles.module.scss'

export default function PendingCostumer() {
    return(
        <div className={styles.container}>
            <div className={styles.iconCostumer}>
                <FontAwesomeIcon icon="store" />
            </div>

            <div className={styles.info}>
                <strong>Estabelecimento</strong>
                <span>(18) 9 9874-5656</span>
            </div>
        </div>
    )
}