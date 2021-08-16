import React from 'react'

import styles from '../pages.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import PendingDeliveryman from '../../components/PendingCard/Deliveryman'

export default function Deliverymen() {
    return(
        <div className={styles.container}>
            <div className={styles.list}>
                <div className={styles.filter}>
                    <div className={styles.groupBtn}>
                        <button className={styles.active}>Todos</button>
                        <button>Ativos</button>
                        <button>Inativos</button>
                        <button>Bloqueados</button>
                    </div>

                    <p>Mostrando resultados de 1 até 50</p>
                </div>

                <main>
                    <header>
                        <div></div>
                        <div className={styles.col1}>#</div>
                        <div className={styles.col3}>Nome</div>
                        <div className={styles.col1}>Avaliação</div>
                        <div className={styles.col1}>Entregas</div>
                        <div className={styles.col1}>Ultimo login</div>
                        <div className={styles.col1}></div>
                    </header>
                    
                    <section>
                        <article className={styles.tRowActive}>
                            <div className={styles.borderLeft}></div>
                            <div className={styles.col1}>1234</div>

                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="user" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Rafael Ricardo Pinheiro Zoucas</strong>
                                    <span>(18) 99999-9999</span>
                                    <span>Rua do Entregador, 123</span>
                                </div>
                            </div>

                            <div className={`${styles.valuation} ${styles.col1}`}>
                                <strong>4.7</strong>
                                <FontAwesomeIcon icon="star" />
                            </div>

                            <strong className={styles.col1}>567</strong>

                            <strong className={styles.col1}>12/08/2021</strong>

                            {/* <strong className={`${styles.col1} ${styles.balance}`}>R$ 0,00</strong> */}

                            <div className={`${styles.col2} ${styles.btns}`}>
                                <button className={styles.block}>
                                    <FontAwesomeIcon icon="ban" />
                                    Bloquear
                                </button>

                                {/* <button className={styles.release}>
                                    <FontAwesomeIcon icon="check-circle" />
                                    Desbloquear
                                </button> */}
                            </div>
                        </article>

                        <article className={styles.tRowInactive}>
                            <div className={styles.borderLeft}></div>
                            <div className={styles.col1}>1234</div>

                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="user" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Rafael Ricardo Pinheiro Zoucas</strong>
                                    <span>(18) 99999-9999</span>
                                    <span>Rua do Entregador, 123</span>
                                </div>
                            </div>

                            <div className={`${styles.valuation} ${styles.col1}`}>
                                <strong>4.7</strong>
                                <FontAwesomeIcon icon="star" />
                            </div>

                            <strong className={styles.col1}>567</strong>

                            <strong className={styles.col1}>12/08/2021</strong>

                            {/* <strong className={`${styles.col1} ${styles.balance}`}>R$ 0,00</strong> */}

                            <div className={`${styles.col2} ${styles.btns}`}>
                                <button className={styles.block}>
                                    <FontAwesomeIcon icon="ban" />
                                    Bloquear
                                </button>

                                {/* <button className={styles.release}>
                                    <FontAwesomeIcon icon="check-circle" />
                                    Desbloquear
                                </button> */}
                            </div>
                        </article>

                        <article className={styles.tRowBlocked}>
                            <div className={styles.borderLeft}></div>
                            <div className={styles.col1}>1234</div>

                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="user" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Rafael Ricardo Pinheiro Zoucas</strong>
                                    <span>(18) 99999-9999</span>
                                    <span>Rua do Entregador, 123</span>
                                </div>
                            </div>

                            <div className={`${styles.valuation} ${styles.col1}`}>
                                <strong>4.7</strong>
                                <FontAwesomeIcon icon="star" />
                            </div>

                            <strong className={styles.col1}>567</strong>

                            <strong className={styles.col1}>12/08/2021</strong>

                            {/* <strong className={`${styles.col1} ${styles.balance}`}>R$ 0,00</strong> */}

                            <div className={`${styles.col2} ${styles.btns}`}>
                                {/* <button className={styles.block}>
                                    <FontAwesomeIcon icon="ban" />
                                    Bloquear
                                </button> */}

                                <button className={styles.release}>
                                    <FontAwesomeIcon icon="check-circle" />
                                    Desbloquear
                                </button>
                            </div>
                        </article>
                    </section>
                </main>
            </div>

            <div className={styles.pendencies}>
                <h3>Novos cadastros</h3>
                <PendingDeliveryman />
                <PendingDeliveryman />
                <PendingDeliveryman />
                <PendingDeliveryman />
                <PendingDeliveryman />
                <PendingDeliveryman />
                <PendingDeliveryman />
                <PendingDeliveryman />
            </div>
        </div>
    )
}