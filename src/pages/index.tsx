import React from 'react'

import pages from '../styles/pages/styles.module.scss'

import PendingDeliveryman from '../components/PendingCard/Deliveryman'
import EvaluationField from '../components/EvaluationField'
import PendingCostumer from '../components/PendingCard/Costumer'
import PendingPayment from '../components/PendingCard/Payment'

export default function Home() {
  return (
    <div className={pages.container}>
      <div className={pages.groupBtn}>
        <button className={pages.active}>Todos</button>
        <button>Pagamentos</button>
        <button>Clientes</button>
        <button>Entregadores</button>
      </div>

      <section>
        <div className={pages.pendingCards}>
          <PendingDeliveryman />
          <PendingCostumer />
          <PendingPayment />
          <PendingDeliveryman />
          <PendingCostumer />
          <PendingPayment />
          <PendingDeliveryman />
          <PendingCostumer />
          <PendingPayment />
          <PendingDeliveryman />
          <PendingCostumer />
          <PendingPayment />
          <PendingDeliveryman />
          <PendingCostumer />
          <PendingPayment />
          <PendingDeliveryman />
          <PendingCostumer />
          <PendingPayment />
        </div>
        
        <div className={pages.evaluationField}>
          <EvaluationField />
        </div>
      </section>
    </div>
  )
}
