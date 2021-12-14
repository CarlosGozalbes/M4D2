import { Component } from 'react'
import { Container, Row, Col, Card, } from 'react-bootstrap'
import scifi from '../data/scifi.json'
// dishes is the array with 5 objects inside of it (each one being a pasta dish)

// .map() is an array method that modifies the objects and returns to you a new array
// const myArray = [1, 2, 3]
// const newArray = myArray.map(element => element + 1)
// newArray is now [2, 3, 4]

// now the final boss: select a pasta and show its comments
// 1) should find a way to select a pasta and remember it as time goes by
// 2) we can now show its comments in the bottom of the page
// 3) if we select a new pasta, the comment section should update

// for remembering things, you need a state.
// a state is a safe place that will keep pieces of info over time

// for having a state, you need a Class Component
// fortunately, converting a functional component into a class component is quite simple:

// 1) import { Component } from 'react' <-- Component is the MAIN COMPONENT CLASS we want to extend from
// 2) replace your function with a class
// 3) the only mandatory method in a class is called render()
// 4) put your JSX in the return statement of the render method

class Home extends Component {

   
    /* state = {
       
        selectedDish: null
        
    }
 */
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    {
                                                    
                        scifi.map(book => (
                        <Col xs={12} md={6} lg={3}>
                        <Card className="bg-dark text-white" style={{ width: '18rem' }}>>
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
                        ))
                        }
                    
                </Row>
                
            </Container>
        )
    }
}

export default Latest-Release

