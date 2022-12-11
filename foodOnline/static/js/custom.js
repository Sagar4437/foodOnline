
// Add to cart using AJAX requests
$(document).ready(function(){
    // add to cart
    $('.add_to_cart').on('click',function(e){
        e.preventDefault();
        
        food_id = $(this).attr('data-id');
        url = $(this).attr('data-url');

        $.ajax({
            type:'GET',
            url: url,
            success : function(response){
                console.log(response);
                if(response.status == 'Login_Required'){
                    swal(response.message,'','info').then(function(){
                        window.location = '/login';
                    })
                }
                else if(response.status == 'Failed'){
                    swal(response.message,'','error')
                    
                }
                else{
                    $('#cart_counter').html(response.cart_counter['cart_count'])
                    $('#qty-'+food_id).html(response.qty)

                    // subtotal and grand total.
                    applyCartAmount(
                        response.cart_ammount['subtotal'],
                        response.cart_ammount['tax'],
                        response.cart_ammount['grand_total'],
                    )
                }
            }
        })
    })

    
    // place the cart item quantity on load
    $('.item_qty').each(function(){
        var the_id = $(this).attr('id')
        var qty = $(this).attr('data-qty')
        
        $('#'+the_id).html(qty)
    })

    // decrease cart
    $('.decrease_cart').on('click',function(e){
        e.preventDefault();
        
        food_id = $(this).attr('data-id');
        url = $(this).attr('data-url');
        cart_id = $(this).attr('id');

        $.ajax({
            type:'GET',
            url: url,
            success : function(response){
                console.log(response);
                if(response.status == 'Login_Required'){
                    swal(response.message,'','info').then(function(){
                        window.location = '/login';
                    })
                }
                else if(response.status == 'Failed'){
                    swal(response.message,'','error')
                }else{
                    $('#cart_counter').html(response.cart_counter['cart_count'])
                    $('#qty-'+food_id).html(response.qty)
                    
                    if(response.qty<=0){
                        document.getElementById("cart-item-"+cart_id).remove()
                        checkEmptyCart()
                        swal('Success', 'Item has been Removed!', 'success')
                    }

                    // subtotal and grand total.
                    applyCartAmount(
                        response.cart_ammount['subtotal'],
                        response.cart_ammount['tax'],
                        response.cart_ammount['grand_total'],
                    )
                }
            }
        })
    })

    // delete cart
    $('.delete_cart').on('click',function(e){
        e.preventDefault();
        
        cart_id = $(this).attr('data-id');
        url = $(this).attr('data-url');

        $.ajax({
            type:'GET',
            url: url,
            success : function(response){
                console.log(response);
                if(response.status == 'Failed'){
                    swal(response.message,'','error')
                }else{
                    $('#cart_counter').html(response.cart_counter['cart_count'])
                    swal(response.status, response.message, 'success')
                    // subtotal and grand total.
                    applyCartAmount(
                        response.cart_ammount['subtotal'],
                        response.cart_ammount['tax'],
                        response.cart_ammount['grand_total'],
                    )
                    removeCartItem(0,cart_id)
                    checkEmptyCart()

                }
            }
        })
    })

    // delete cart element
    function removeCartItem(cartItemQty, cart_id){
        if (cartItemQty <= 0){
            // remove cart item
            document.getElementById("cart-item-"+cart_id).remove()
        }
    }

    // check if cart is empty
    function checkEmptyCart(){
        var cart_counter = document.getElementById('cart_counter').innerHTML
        if (cart_counter==0){
            document.getElementById('empty-cart').style.display = "block";
        }
    }

    // apply cart ammount
    function applyCartAmount(subtotal,tax,grand_total){
        if(window.location.pathname == '/cart/'){
            $('#subtotal').html(subtotal)
            $('#tax').html(tax)
            $('#total').html(grand_total)
        }
    }
})
