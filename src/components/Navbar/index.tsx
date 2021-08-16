import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import styles from './styles.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className={styles.container}>
            <section>
                <Link href="/">
                    <button className={styles.active}>
                        <FontAwesomeIcon icon="tasks" />
                    </button>
                </Link>

                <Link href="/costumers">
                    <button>
                        <FontAwesomeIcon icon="users" />
                    </button>
                </Link>

                <Link href="/deliverymen">
                    <button>
                        <FontAwesomeIcon icon="motorcycle" />
                    </button>
                </Link>
                
                <button>
                    <FontAwesomeIcon icon="dollar-sign" />
                </button>
            </section>

            <button>
                <FontAwesomeIcon icon="power-off" />
            </button>
        </div>
    )
}