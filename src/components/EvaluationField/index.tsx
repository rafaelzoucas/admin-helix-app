import React from 'react'

import styles from './styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Deliveryman from './Deliveryman'
import Payment from './Payment'
import Costumer from './Costumer'

library.add(fas)

export default function EvaluationField() {
    return(
        <div className={styles.container}>
            <Deliveryman />
            {/* <Payment /> */}
            {/* <Costumer /> */}
        </div>
    )
}