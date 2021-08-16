import React from 'react'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import Header from '../components/Header'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
