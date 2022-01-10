import { Button, Card, Col } from 'react-bootstrap'


const SingleBook = ({book}) =><Col xs={12} md={6} lg={3}>
    <Card key={book.asin} className="bg-dark text-white my-3 d-flex " style={{ width: '14rem' }}>
        <Card.Img className="img-fluid cover" src={book.img} alt="book image" /* style={{object-Fit: 'cover',}} */ />
        <Card.ImgOverlay className=''>
            <Card.Title>{book.title}</Card.Title>
            <div className='d-flex justify-content-between'>
            <Card.Text>
                {book.category}
            </Card.Text>
            <Button variant="primary">{book.price}€</Button>
            </div>
        </Card.ImgOverlay>
    </Card>
</Col>


export default SingleBook