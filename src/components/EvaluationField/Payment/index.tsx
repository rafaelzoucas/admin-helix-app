import React from 'react'

import styles from '../styles.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Payment() {
    return(
        <>
            <div className={styles.toEvaluate}>
                <div className={styles.data}>
                    <div className={styles.profilePicture}>
                        <FontAwesomeIcon icon="store" />
                    </div>

                    <div className={styles.info}>
                        <strong>Estabelecimento</strong>
                        <span>Está pagando</span>
                        <h3>R$ 100,00</h3>
                    </div>
                </div>

                <div className={styles.actions}>
                    <span>Aprovar documento</span>
                    
                    <div className={styles.actionPaymentOnPressed}>
                        <div>
                            Pagamento aprovado
                            <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                        </div>
                        <input type="text" placeholder="R$ 0,00" />
                    </div>

                    <span>Selecione uma ou mais opções caso seja necessário</span>

                    <div className={styles.action}>
                        Data divergente
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>

                    <div className={styles.action}>
                        Valor divergente
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>

                    <div className={styles.action}>
                        Conta destinatária divergente
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>

                    <div className={styles.action}>
                        Comprovante falsificado
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>
                    
                    <div className={styles.addActionInput}>
                        <input type="text" name="" id="" placeholder="Nova observação" />

                        <button>
                            <FontAwesomeIcon icon="plus-circle" />
                        </button>
                    </div>
                </div>
                
                <button className="success">Confirmar pagamento</button>
            </div>

            <div className={styles.receipt}>
                {/* <img src="" alt="" /> */}
            </div>
        </>
    )
}