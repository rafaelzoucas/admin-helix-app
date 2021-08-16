import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import styles from '../styles.module.scss'

export default function PendingPayment() {
    return(
        <div className={styles.container}>
            <div className={styles.iconMoney}>
                <FontAwesomeIcon icon="dollar-sign" />
            </div>

            <div className={styles.info}>
                <strong>Estabelecimento</strong>
                <span>Está pagando</span>
                <span>R$ 150,00</span>
            </div>

            <button>Avaliar</button>
        </div>
    )
}