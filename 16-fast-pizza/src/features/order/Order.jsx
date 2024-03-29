// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom'
import { getOrder } from '../../services/apiRestaurant'
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate
} from '../../utils/helpers'
import OrderItem from './OrderItem'

const templateOrder = {
  id: 'ABCDEF',
  customer: 'Jonas',
  phone: '123456789',
  address: 'Arroios, Lisbon , Portugal',
  priority: true,
  estimatedDelivery: '2027-04-25T10:00:00',
  cart: [
    {
      pizzaId: 7,
      name: 'Napoli',
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48
    },
    {
      pizzaId: 5,
      name: 'Diavola',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32
    },
    {
      pizzaId: 3,
      name: 'Romana',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15
    }
  ],
  position: '-9.000,38.000',
  orderPrice: 95,
  priorityPrice: 19
}

export const loader = async ({ params }) => {
  const order = await getOrder(params.orderId)
  return order
}

function Order () {
  const order = useLoaderData()
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart
  } = order
  const deliveryIn = calcMinutesLeft(estimatedDelivery)

  return (
    <main className='px-4 py-6 space-y-8'>
      <div className='flex items-center justify-between gap-x-4 gap-y-2 flex-wrap'>
        <h2 className='text-xl font-semibold'>Order #{id} status</h2>

        <div className='space-x-4'>
          {priority && <span className='px-3 py-1 bg-red-600 rounded-full text-sm font-semibold text-red-50 uppercase'>Priority</span>}
          <span className='px-3 py-1 bg-green-600 rounded-full text-sm font-semibold text-green-50 uppercase'>{status} order</span>
        </div>
      </div>

      <div className='flex items-center justify-between gap-x-4 flex-wrap bg-stone-200 px-6 py-5'>
        <p className='font-medium'>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className='text-xs text-stone-700'>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className='divide-y-2 divide-stone-200 border-y-2 border-stone-200'>
        {cart.map(item => <OrderItem item={item} key={item.id} />)}
      </ul>

      <div className='space-y-2 bg-stone-200 text-stone-700 px-6 py-5'>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className='font-medium'>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </main>
  )
}

export default Order
