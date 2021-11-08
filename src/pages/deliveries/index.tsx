import React from 'react'

import styles from '../pages.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import PendingCostumer from '../../components/PendingCard/Costumer'

export default function Costumers() {
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
                        <div className={styles.col1}>Id</div>
                        <div className={styles.col3}>Data</div>
                        <div className={styles.col2}>Estabelecimento</div>
                        <div className={styles.col1}>Entregador</div>
                        <div className={styles.col1}>Endereço</div>
                        <div className={styles.col1}></div>
                    </header>
                    
                    <section>
                        <article className={styles.tRowActive}>
                            <div className={styles.borderLeft}></div>

                            <div className={styles.col1}>1234</div>

                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="store" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Estabelecimento</strong>
                                    <span>(18) 99999-9999</span>
                                    <span>Rua do Restaurante, 123</span>
                                </div>
                            </div>

                            <strong className={styles.col2}>Alimentício</strong>

                            <strong className={styles.col1}>567</strong>

                            <strong className={`${styles.col1} ${styles.balance}`}>R$ 0,00</strong>

                            <div className={`${styles.lastLogin} ${styles.col1}`}>
                                <strong>12/08/2021</strong>
                            </div>

                            <div className={`${styles.col3} ${styles.btns}`}>
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
                                    <FontAwesomeIcon icon="store" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Estabelecimento</strong>
                                    <span>(18) 99999-9999</span>
                                    <span>Rua do Restaurante, 123</span>
                                </div>
                            </div>

                            <strong className={styles.col2}>Alimentício</strong>

                            <strong className={styles.col1}>567</strong>

                            <strong className={`${styles.col1} ${styles.balance}`}>R$ 0,00</strong>

                            <div className={`${styles.lastLogin} ${styles.col1}`}>
                                <strong>12/08/2021</strong>
                            </div>

                            <div className={`${styles.col3} ${styles.btns}`}>
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
                                    <FontAwesomeIcon icon="store" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Estabelecimento</strong>
                                    <span>(18) 99999-9999</span>
                                    <span>Rua do Restaurante, 123</span>
                                </div>
                            </div>

                            <strong className={styles.col2}>Alimentício</strong>

                            <strong className={styles.col1}>567</strong>

                            <strong className={`${styles.col1} ${styles.balance}`}>R$ 0,00</strong>

                            <div className={`${styles.lastLogin} ${styles.col1}`}>
                                <strong>12/08/2021</strong>
                            </div>

                            <div className={`${styles.col3} ${styles.btns}`}>
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
                <PendingCostumer />
                <PendingCostumer />
                <PendingCostumer />
                <PendingCostumer />
                <PendingCostumer />
                <PendingCostumer />
                <PendingCostumer />
                <PendingCostumer />
                <PendingCostumer />
            </div>
        </div>
    )
}