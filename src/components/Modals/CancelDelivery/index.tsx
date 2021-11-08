import React from 'react'
import styles from './styles.module.scss'

export default function CancelDelivery({id = 'modal', onClose = () => {}}) {

    const handleOutSideClick = (e) => {
        if(e.target.id === id) onClose()
    }
    return(
        <div id={id} className={styles.modalContainer} onClick={handleOutSideClick}>
            <div className={styles.cancelContainer}>
                <section className={styles.title}>
                    <p>Cancelar esta entrega?</p>
                </section>

                <section className={styles.options}>
                    <div className={styles.selected}>Devolver saldo</div>
                    <div>Descontar 50% do entregador</div>
                </section>

                <section className={styles.actionBtns}>
                    <button>Quero cancelar</button>
                    <button onClick={onClose}>Melhor não</button>
                </section>
            </div>
        </div>
    )
}