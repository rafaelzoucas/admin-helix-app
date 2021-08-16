import React from 'react'

import styles from '../styles.module.scss'
import pages from '../../../styles/pages/styles.module.scss'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Deliveryman() {
    return(
        <>
            <div className={styles.toEvaluate}>
                <div className={pages.groupBtnSmall}>
                    <button className={pages.active}>Foto</button>
                    <button>CNH</button>
                    <button>Veículo</button>
                    <button>Residência</button>
                </div>

                <div className={styles.data}>
                    <div className={styles.profilePicture}>
                        <FontAwesomeIcon icon="user" />
                    </div>

                    <div className={styles.info}>
                        <strong>Rafael Ricardo Pinheiro Zoucas</strong>
                        <p>(18) 9 9999-9999</p>
                        <p>444.555.666-99</p>
                        <p>entregador@helix.com</p>
                        <p>Rua Castro Alves, 1 - Centro</p>
                        <p>Assis - SP</p>
                    </div>
                </div>

                <div className={styles.actions}>
                    <span>Aprovar documento</span>
                    
                    <div className={styles.actionOnPressed}>
                        CNH aprovada
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>

                    <span>Selecione uma ou mais opções caso seja necessário</span>

                    <div className={styles.action}>
                        CNH está vencida
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>

                    <div className={styles.action}>
                        Fotos estão divergentes
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>

                    <div className={styles.action}>
                        Foto do documento está ilegível
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>

                    <div className={styles.action}>
                        Documento falsificado
                        <FontAwesomeIcon icon="check-circle" className={styles.checkCircle} />
                    </div>

                    <button className="success">Enviar</button>
                </div>
            </div>

            <div className={styles.receipt}>
                {/* <img src="" alt="" /> */}
            </div>
        </>
    )
}