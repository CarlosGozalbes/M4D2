import { Button, Card, Col } from 'react-bootstrap'


const SingleBook = ({book}) =><Col xs={12} md={6} lg={3}>
    <Card className="bg-dark text-white" style={{ width: '18rem' }}>
        <Card.Img src={book.img} alt="book image" />
        <Card.ImgOverlay>
            <Card.Title>{book.Title}</Card.Title>
            <Card.Text>
                {book.category}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.ImgOverlay>
    </Card>
</Col>


export default SingleBook