import React, { useState } from 'react'

import styles from '../pages.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import PendingCostumer from '../../components/PendingCard/Costumer'
import CancelDelivery from '../../components/Modals/CancelDelivery'

export default function Costumers() {
    const [isModalConfirmCancelOpened, setIsModalConfirmCancelOpened] = useState(false)
    
    function openConfirmCancel() {
        setIsModalConfirmCancelOpened(true)
    }
    return(
        <div className={styles.container}>
            <div className={styles.list}>
                <div className={styles.filter}>
                    <div className={styles.groupBtn}>
                        <button className={styles.active}>Todas</button>
                        <button>Em espera</button>
                        <button>Em progresso</button>
                        <button>Finalizadas</button>
                        <button>Canceladas</button>
                    </div>

                    <input type="text" placeholder="Filtrar por Cliente, Entregador, Endereço etc" />
                    <div className={styles.calendarFilter}>
                        <span>Mostrando de 08/11 até 12/11</span>

                        <button>
                            <FontAwesomeIcon icon="calendar" />
                        </button>
                    </div>
                </div>

                <main>
                    <header>
                        <div></div>
                        <div className={styles.col1}>Id</div>
                        <div className={styles.col1}>Data</div>
                        <div className={styles.col3}>Estabelecimento</div>
                        <div className={styles.col3}>Entregador</div>
                        <div className={styles.col1}>Endereço</div>
                        <div className={styles.col1}></div>
                    </header>
                    
                    <section>
                        <article className={styles.tRowActive}>
                            <div className={styles.borderLeft}></div>

                            <div className={styles.col1}>1234</div>

                            <div className={`${styles.lastLogin} ${styles.col1}`}>
                                <p>12/08/2021</p>
                                <p>08:17:36</p>
                            </div>
                            
                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="store" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Estabelecimento</strong>
                                    <span>(18) 99999-9999</span>
                                    <FontAwesomeIcon icon="comment" />
                                </div>
                            </div>

                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="user" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Nome do Entregador</strong>
                                    <span>(18) 99999-9999</span>
                                    <FontAwesomeIcon icon="comment" />
                                </div>
                            </div>

                            <strong className={styles.col2}>Rua do Endereço da Entrega, 1234</strong>

                            <div className={`${styles.col3} ${styles.btns}`}>
                                <button className={styles.release}>
                                    <FontAwesomeIcon icon="eye" />
                                </button>

                                <button className={styles.block} onClick={openConfirmCancel}>
                                    <FontAwesomeIcon icon="times-circle" />
                                </button>
                            </div>
                        </article>

                    </section>
                    <section>
                        <article className={styles.tRowBlocked}>
                            <div className={styles.borderLeft}></div>

                            <div className={styles.col1}>1234</div>

                            <div className={`${styles.lastLogin} ${styles.col1}`}>
                                <p>12/08/2021</p>
                                <p>08:17:36</p>
                            </div>
                            
                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="store" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Estabelecimento</strong>
                                    <span>(18) 99999-9999</span>
                                    <FontAwesomeIcon icon="comment" />
                                </div>
                            </div>

                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="user" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Nome do Entregador</strong>
                                    <span>(18) 99999-9999</span>
                                    <FontAwesomeIcon icon="comment" />
                                </div>
                            </div>

                            <strong className={styles.col2}>Rua do Endereço da Entrega, 1234</strong>

                            <div className={`${styles.col3} ${styles.btns}`}>
                                <button className={styles.release}>
                                    <FontAwesomeIcon icon="eye" />
                                </button>
                            </div>
                        </article>

                    </section>
                    <section>
                        <article className={styles.tRowOnHold}>
                            <div className={styles.borderLeft}></div>

                            <div className={styles.col1}>1234</div>

                            <div className={`${styles.lastLogin} ${styles.col1}`}>
                                <p>12/08/2021</p>
                                <p>08:17:36</p>
                            </div>
                            
                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="store" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Estabelecimento</strong>
                                    <span>(18) 99999-9999</span>
                                    <FontAwesomeIcon icon="comment" />
                                </div>
                            </div>

                            <div className={`${styles.col3} ${styles.name}`}>
                                
                            </div>

                            <strong className={styles.col2}>Rua do Endereço da Entrega, 1234</strong>

                            <div className={`${styles.col3} ${styles.btns}`}>
                                <button className={styles.release}>
                                    <FontAwesomeIcon icon="eye" />
                                </button>
                            </div>
                        </article>

                    </section>
                    <section>
                        <article className={styles.tRowInProgress}>
                            <div className={styles.borderLeft}></div>

                            <div className={styles.col1}>1234</div>

                            <div className={`${styles.lastLogin} ${styles.col1}`}>
                                <p>12/08/2021</p>
                                <p>08:17:36</p>
                            </div>
                            
                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="store" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Estabelecimento</strong>
                                    <span>(18) 99999-9999</span>
                                    <FontAwesomeIcon icon="comment" />
                                </div>
                            </div>

                            <div className={`${styles.col3} ${styles.name}`}>
                                <div className={styles.picture}>
                                    <FontAwesomeIcon icon="user" />
                                </div>
                                <div className={styles.info}>
                                    <strong>Nome do Entregador</strong>
                                    <span>(18) 99999-9999</span>
                                    <FontAwesomeIcon icon="comment" />
                                </div>
                            </div>

                            <strong className={styles.col2}>Rua do Endereço da Entrega, 1234</strong>

                            <div className={`${styles.col3} ${styles.btns}`}>
                                <button className={styles.release}>
                                    <FontAwesomeIcon icon="eye" />
                                </button>

                                <button className={styles.block}>
                                    <FontAwesomeIcon icon="times-circle" />
                                </button>
                            </div>
                        </article>
                    </section>
                </main>
            </div>

            {isModalConfirmCancelOpened ? (
                <CancelDelivery 
                    onClose={() => setIsModalConfirmCancelOpened(false)}
                />
            ) : null}

            <div className={styles.pendencies}>
                <div className={styles.resumeTodayContainer}>
                    <header>
                        <span>Hoje</span>
                        {/* <FontAwesomeIcon icon="chevron-right" /> */}
                    </header>

                    <div className={styles.bodyContainer}>
                        <div className={styles.resume}>
                            <p>
                                <h3>0</h3>
                                <span>canceladas</span>
                            </p>

                            <p>
                                <h3>3</h3>
                                <span>aguardando entregador</span>
                            </p>

                            <p>
                                <h3>35</h3>
                                <span>em progresso</span>
                            </p>

                            <p>
                                <h3>300</h3>
                                <span>finalizadas</span>
                            </p>
                        </div>

                        <div className={styles.time}>
                            <p>
                                <span>Aceitar</span>
                                <strong>5 min</strong>
                            </p>
                            <p>
                                <span>Pegar</span>
                                <strong>15 min</strong>
                            </p>
                            <p>
                                <span>Finalizar</span>
                                <strong>10 min</strong>
                            </p>
                            <p className={styles.total}>
                                <span>Total</span>
                                <strong>30 min</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.shortResume}>
                    <div className={styles.card}>
                        <header>
                            <span>Ontem</span>
                            {/* <FontAwesomeIcon icon="chevron-right" />     */}
                        </header>

                        <div className={styles.body}>
                            <p>
                                <h6>3</h6>
                                <span>canceladas</span>
                            </p>

                            <p>
                                <h3>300</h3>
                                <span>finalizadas</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <header>
                            <span>Período selecionado</span>
                            {/* <FontAwesomeIcon icon="chevron-right" />     */}
                        </header>

                        <div className={styles.body}>
                            <p>
                                <h6>3</h6>
                                <span>canceladas</span>
                            </p>

                            <p>
                                <h3>300</h3>
                                <span>finalizadas</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}