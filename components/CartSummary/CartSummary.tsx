import React from 'react'
import { Segment, Button, Divider, Label } from 'semantic-ui-react'

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

        <Divider />

        {totalAmount > 50 && totalAmount < 100 && (
          <Label color="green" pointing prompt>
            {' '}
            Se aplico descuento de 15%{' '}
          </Label>
        )}

        {totalAmount > 100 && totalAmount < 150 && (
          <Label color="green" pointing prompt>
            {' '}
            Se aplico descuento de 30%{' '}
          </Label>
        )}

        {totalAmount > 150 && (
          <Label color="green" pointing prompt>
            {' '}
            Se aplico descuento de 40%{' '}
          </Label>
        )}
      </span>
      <Button color="black" floated="right">
        Check out
      </Button>
    </Segment>
  )
}

export default CartSummary
