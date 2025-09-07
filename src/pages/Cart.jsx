import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const Cart = () => {
  const [cartItem, setCartItem] = useState([])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('cartItems'))
    setCartItem(data)

  }, [])

const deleteItem=(item_id)=>{
let data = JSON.parse(localStorage.getItem('cartItems'))
let newcart = data.filter((item)=>item.id != item_id)
localStorage.setItem('cartItems',JSON.stringify(newcart))
setCartItem(newcart)
Swal.fire({
     title: "Done",
     icon: "Success",
     text: "Item Deleted.",
     draggable: true
   })
}

  return (
    <>
      <div class="container my-5">
        {
          cartItem && cartItem.length>=1?(
            <>
        <h2 class="text-center text-warning">Cart Items and Summary</h2>
        <hr />
        
        
        <div class="d-flex justify-content-between">
          <div class="col-md-8">
            <table class="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Images</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItem.map((item, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <img src={item.image} alt={item.tile} width={50} />

                      </td>
                      <td><i className='bi bi-trash btn btn-danger btn-sm' onClick={()=>deleteItem(item.id)}></i></td>
                    </tr>

                  ))
                }
              </tbody>

            </table>
          </div>
          

          <div class="col-md-3">
            <div class="cart-summary p-3 shadow rounded-3">
              <h3>Cart Summary</h3>
              <hr />
              <p class="my-1">Total unit: <span class="text-success">
                {
                  cartItem.reduceRight((acc, item) => {
                    return acc + item.quantity
                  }, 0)
                }
                units</span></p>
              <p class="my-1">Total price: <span class="text-success">$
                {
                  cartItem.reduceRight((acc, item) => {
                    return acc + (item.quantity * item.price)
                  }, 0)
                }
              </span></p>
              
              <p class="my-1">Discount: <span class="text-success">
                 {
                  cartItem.reduceRight((acc, item) => {
                    return acc + item.discount
                  }, 0).toFixed(2)
                }
                %</span></p>
              <hr /><hr />
              <div class="fw-bold text-danger">Grand Total:<span class="text-success float end">$
                {
                  cartItem.reduceRight((acc, item) => {
                    const discountedPrice = item.price * (1 - (item.discount || 0)/100);
                    return acc + discountedPrice *item.quantity
                  }, 0).toFixed(2)
                }
                </span></div>
              <a href="#" class="btn btn-success w-100">Checkout</a>
            </div>
          </div>
        </div>
        </>
          ):(
            <div className="text-center"><h2>Your Cart is Empty</h2></div>
          )
        }
      </div>

    </>
  )
}

export default Cart
