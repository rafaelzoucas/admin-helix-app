import React from 'react'

import styles from '../styles.module.scss'
import pages from '../../../styles/pages/styles.module.scss'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Costumer() {
    return(
        <>
            <div className={styles.toEvaluate}>
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
                <div className={styles.data}>
                    <div className={styles.profilePicture}>
                        <FontAwesomeIcon icon="store" />
                    </div>

                    <div className={styles.info}>
                        <strong>Estabelecimento</strong>

                        <span>Telefone (WhatsApp)</span>
                        <p>(18) 9 9999-9999</p>

                        <span>CNPJ</span>
                        <p>32.185.931/0001-06</p>

                        <span>Endereço</span>
                        <p>Rua Castro Alves, 1 - Centro</p>
                        <p>Assis - SP</p>

                        <span>Ramo de atividades</span>
                        <p>Alimentício</p>
                        
                        <span>Horário de funcionamento</span>
                        <p>seg - sab das 19h às 23h</p>

                        <span>Proprietário</span>
                        <p>Nome do Proprietário</p>

                        <span>CPF</span>
                        <p>444.555.666-77</p>

                        <span>E-mail</span>
                        <p>estabelecimento@helix.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}