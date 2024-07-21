import React from 'react'

const CartItem = (props) => {
    // constructor () {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: ' Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }

        // this.increaseQuantity = this.increaseQuantity.bind(this);

        // this.testing();
    // }


    // testing(){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         // setState acts like a synchronus call 
    //         this.setState({ qty: this.state.qty + 10 });

    //         this.setState({ qty: this.state.qty + 10 });

    //         this.setState({ qty: this.state.qty + 10 });

    //         console.log('state', this.state);
    //     });
    // }



    // increaseQuantity = () => {
        
        // this.state.qty += 1;

        // console.log('this', this.state); // this line is just for testing purposes in the console

        // setState form 1 - if Previous State is not required
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2 - if Previous State is required
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }

    // decreaseQuantity = () => {
    //     const { qty } = this.state;

    //     if (qty === 0) {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }

        const { price, title, qty } = props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>

                </div>
                <div className=" right-block">
                    <div style={ { fontSize: 25 }}>{title}</div>
                    <div style={ { color: '#777' }}>Rs {price}</div>
                    <div style={ { color: '#777' }}>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        {/* { Buttons } */}

                        <img
                         alt="increase"
                         className='action-icons'
                         src='https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg'
                         onClick={() => onIncreaseQuantity(product)}
                         />

                        <img
                         alt="decrease"
                         className='action-icons'
                         src='https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg'
                         onClick={() => onDecreaseQuantity(product)}
                         />
                        
                        <img
                         alt="delete"
                         className='action-icons'
                         src='https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'
                         onClick={() => onDeleteProduct(product.id)}
                         />

                     </div>
                </div>
            </div>
        );
    }



const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }
  

export default CartItem;