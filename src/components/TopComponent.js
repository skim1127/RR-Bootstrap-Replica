import Button from 'react-bootstrap/Button'

function TopComponent() {
    const divStyle = {
        height: "20vh",
        backgroundImage: "url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundColor: "#deedd6",
        height: "25%",
        width: "100%",
        // position: "absolute",
        marginBottom: "60px",
        display: "flex",
        flexDirection: "column"
    }

    const buttonStyle = {
        height: "40px",
        width: "60px"
    }
    return( 
        <div style={ divStyle }>
            <Button style={ buttonStyle }variant='light'>
                <img
                src="https://www.instacart.com/assets/growth/landing/locations_page/us_flag-ba87db09d555f6ca56f88b49567659e9fcd51d5083d312e1040464ab996900c1.svg"
                width="25px"
                height="25px"
                
                />
            </Button>
            <h1>Order groceries for delivery or pickup today</h1>
            <p>Whatever you want from local stores, brought right to your door.</p>
        </div>
    )
}

export default TopComponent