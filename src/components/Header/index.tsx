import React from 'react'
import Image from 'next/image'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import styles from './styles.module.scss'
import { useState } from 'react'
import Notifications from '../Modals/Notifications'
import NewDelivery from '../Modals/NewDelivery'
import NewPayment from '../Modals/NewPayment'

export default function Header(props) {
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false)
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false)
    const [isModalNewDeliveryVisible, setIsModalNewDeliveryVisible] = useState(false)
    const [isNewOptionsVisible, setIsNewOptionsVisible] = useState(false)
    const [isNewPaymentVisible, setIsNewPaymentVisible] = useState(false)


    const openNotifications = () => {
        setIsNotificationsVisible(true)
    }

    const showHideSearchInput = () => {
        if(isSearchInputVisible) {
            setIsSearchInputVisible(false)
        } else {
            setIsSearchInputVisible(true)
        }
    }

    const newDelivery = () => {
        setIsModalNewDeliveryVisible(true)
        setIsNewOptionsVisible(false)
    }

    const newPayment = () => {
        setIsNewPaymentVisible(true)
        setIsNewOptionsVisible(false)
    }

    const newOptions = () => {
        setIsNewOptionsVisible(true)
    }
    
    return(
        <>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <Image 
                        width={115.71} 
                        height={25} 
                        src="/img/logo/orange-logo.png"
                        alt="Logo"
                    />
                </div>

                <h3>{'{props.title}'}</h3> 

                <div className={styles.buttonsHeader}>
                    <div className={styles.searchContainer}>
                        <input 
                            type="text" 
                            placeholder="Pesquisar" 
                            className={`${isSearchInputVisible ? (
                                `${styles.showSearchInput}`
                            ) : (
                                `${styles.hideSearchInput}`
                            )}`} 
                        />
                        <button onClick={showHideSearchInput} className={styles.searchBtn}>
                            <FontAwesomeIcon icon="search" className={styles.faIcon} />
                        </button>
                    </div>

                    <button onClick={openNotifications} className={styles.notificationButton}>
                        <div className={styles.badgeNewNotification}>
                            99+
                        </div>

                        {/* <div className={styles.newIssueNotification}>
                            <FontAwesomeIcon icon="exclamation-circle" />
                        </div> */}

                        <FontAwesomeIcon icon="bell"  className={styles.faIcon} />
                    </button>

                    <button 
                        onClick={newOptions} 
                        className={styles.newDelivery}
                    >
                        <span>+</span>
                    </button>

                    {isNewOptionsVisible ? (
                        <div 
                            className={styles.newOptionsContainer}
                        >
                            <p onClick={newPayment}>Novo pagamento</p>
                            <p onClick={newDelivery}>Nova entrega</p>
                        </div>
                    ) : null}

                    {isNewPaymentVisible ? (
                        <NewPayment 
                            onClose={() => {
                                setIsNewPaymentVisible(false)
                            }} 
                        />
                    ) : null}

                    {isModalNewDeliveryVisible ? (
                        <NewDelivery 
                            onClose={() => {
                                setIsModalNewDeliveryVisible(false)
                            }} 
                        />
                    ) : null}
                </div>
            </div>
            
            {isNotificationsVisible ? <Notifications onClose={() => setIsNotificationsVisible(false)} /> : null}
        </>
    )
}