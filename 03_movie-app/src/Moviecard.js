import { Component } from 'react';

export default class MovieCard extends Component {
    
    // this.addStars = this.addStars.bind(this);

    addStars = () => {

        if(this.state.stars >= 5){
            return;
        }

        // Form - 1
        // this.setState({
        //     stars: this.state.stars + 0.5
        // })

        // Form - 2
        this.setState((prevState) => {
            return{
                stars: prevState.stars + 0.25
            }
        })


        // this.state.stars += 0.5;
        // console.log("No. of stars : ", this.state.stars);

    }

    // decreasing the stars value
    decStars = () => {
        
        if(this.state.stars <= 0){
            return;
        }
        this.setState((preState) => {
            return{
                stars: preState.stars - 0.25
            }
        })
    }

    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }

    handleAddToCart = () => {
        this.setState({
            isIncart: !this.state.isIncart
        })
    }

    render() {
        const {movies, addStars} = this.props;
        const {title, plot, price, rating, /* stars, */ fav, isIncart} = this.props.movies;
        return (
            <div className='main'>
                <div className='movie-card'>

                    <div className='left'>
                        <img alt="Poster" src='https://www.themoviedb.org/t/p/original/nVXAXwx71NVWDIuqOSHvYzRmKP3.jpg'/>
                    </div>

                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>

                                <img
                                className='str-btn'
                                alt="decrease"
                                src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                                onClick={this.decStars}/>

                                <img
                                className='stars'
                                alt="star"
                                src="https://cdn-icons-png.flaticon.com/128/616/616490.png"/>

                                <img
                                className='str-btn'
                                alt="increase"
                                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                onClick = {() => {addStars(movies)}}/>

                                <span className='starCount'>{this.props.movies.star}</span>
                                {/* <span className='starCount'>{stars}</span> */}


                            </div>

                            {/* {fav?<button className='unfavourite-btn' onClick={this.handleFav}>Un-Favourite</button>:
                            <button className='favourite-btn' onClick={this.handleFav}>Favourite</button>} */}

                            <button className={fav?'unfavourite-btn':'favourite-btn'}
                            onClick={this.handleFav}>{fav?"Un-favourite":"Favourite"}</button>
                            

                            {<button className={isIncart?'unfavourite-btn':'cart-btn'}
                            onClick={this.handleAddToCart}>{isIncart?"Remove from Cart":"Add to Cart"}</button>}
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
