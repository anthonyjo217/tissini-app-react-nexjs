import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Item, Button, Loader, Message } from 'semantic-ui-react'
import { CartItemType } from '@store/Cart'
import { Product } from '@classes/Product'

type CartItemListProps = {
  items: CartItemType[]
  removeFromCart: (product: Product) => void
  loading?: boolean
}

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (loading) return <Loader active inline="centered" />

  if (items.length === 0)
    return (
      <Message warning as="section">
        <Message.Header>Your cart is empty</Message.Header>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Message>
    )

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, images, description } = cartItem

      return {
        childKey: id,
        header: (
          // <Link href={`/product/${id}/`}> </Link>
          <Item.Header as="a">{name}</Item.Header>
        ),

        image: (
          <Item.Image
            src={`https://v3.tissini.app${images[0].url}`}
            alt={name}
            size="small"
            style={{ background: '#f2f2f2' }}
          />
        ),
        meta: `${quantity} x ${price}`,
        description: { description },
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
            onClick={() => removeFromCart(cartItem)}
          />
        ),
      }
    })

  return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />
}

export default CartItemList
