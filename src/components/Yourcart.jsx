function YourCart (){
    return (
        <div className="your-card-container">
            <p className="Amount-myAdded-desserts">Your Cart (7)</p>
            <div className="illustration-empty-wrapper">
                <img className="illustration-empty-cart-image" src="../images/illustration-empty-cart.svg" alt="illustration-empty-cart"/>
            <p className="empty-text">Your added items will appear here</p>
            </div>
        </div>
    )
}export default YourCart;