import asyncHandler from 'express-async-handler'
import Orders from '../models/orderModel.js'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req,res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  } = req.body

  if (!orderItems || orderItems.length === 0) {
    res.status(400)
    throw new Error('Empty order items')
  } else {
    const order = new Orders({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })

    const createdOrder = await order.save()
    return res.status(201).json(createdOrder)
  }
})

export { addOrderItems }