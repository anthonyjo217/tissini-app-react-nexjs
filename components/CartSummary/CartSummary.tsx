import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

type CartSummaryProps = {
  totalAmount: number
  totalDiscount: number
}

const CartSummary = ({ totalAmount, totalDiscount }: CartSummaryProps) => {
  return (
    <Segment clearing size="large" as="section">
      <span>
        <strong>Sub total:</strong>
        {totalAmount > 50
          ? `${totalDiscount.toFixed(2)}`
          : `${totalAmount.toFixed(2)}`}

        <br />

        {totalDiscount > 50 &&
          totalDiscount < 100 &&
          ' Se aplico descuento de 15%'}
        {totalDiscount > 100 &&
          totalDiscount < 150 &&
          'Se aplico descuento de 30%'}
        {totalDiscount > 150 && ' Se aplico descuento de 40%'}
      </span>
      <Button color="black" floated="right">
        Check out
      </Button>
    </Segment>
  )
}

export default CartSummary
