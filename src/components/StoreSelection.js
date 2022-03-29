import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function StoreSelection() {
    return(
        <div style={{ margin: "auto"}} >
            <h2>Choose Your Store</h2>
            <Container style={{ marginTop: "40px", textAlign: "center"}}>
                <Col style={{ borderBottom: "1px solid black", display: "flex", justifyContent: "space-evenly"}}>
                    <Row>
                        <Col xs=".5" >
                            <Image
                            style={{ height: "55px", width: "50px", border: "1px solid black" }}
                            src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                            roundedCircle
                            />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image
                            style={{ height: "55px", width: "50px", border: "1px solid black" }}
                            src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png"
                            roundedCircle
                            />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>Shop Rite</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image
                            style={{ height: "55px", width: "50px", border: "1px solid black" }}
                            src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png"
                            roundedCircle
                            />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>Shop Rite</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                </Col>
                <Col style={{ marginTop: "32px", borderBottom: "1px solid black", display: "flex", justifyContent: "space-evenly"}}>
                    <Row>
                        <Col xs=".5" >
                            <Image
                            style={{ height: "55px", width: "50px", border: "1px solid black" }}
                            src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                            roundedCircle
                            />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image
                            style={{ height: "55px", width: "50px", border: "1px solid black" }}
                            src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png"
                            roundedCircle
                            />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>Shop Rite</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image
                            style={{ height: "55px", width: "50px", border: "1px solid black" }}
                            src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png"
                            roundedCircle
                            />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>Shop Rite</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default StoreSelection