import React from 'react'
import styles from './styles.module.scss'

export default function NewPayment({id = 'modal', onClose = () => {}}) {

    const handleOutSideClick = (e) => {
        if(e.target.id === id) onClose()
    }
    return(
        <div id={id} className={styles.modalContainer} onClick={handleOutSideClick}>
            <div className={styles.cancelContainer}>
                <section className={styles.title}>
                    <p>Novo pagamento</p>
                </section>

                <div className={styles.form}>
                    <span>Nome do cliente</span>
                    <input type="text" placeholder="Nome do Cliente" />

                    <span>Valor pago</span>
                    <input type="text" placeholder="R$ 0,00" />
                </div>

                <section className={styles.actionBtns}>
                    <button>Cancelar</button>
                    <button onClick={onClose}>Confirmar pagamento</button>
                </section>
            </div>
        </div>
    )
}