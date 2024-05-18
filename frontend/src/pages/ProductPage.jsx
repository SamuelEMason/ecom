import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../products';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { formattedReviewCount } from '../utils';
import Rating from '../components/Rating';

const productStatus = (countInStock) =>
	countInStock > 0 ? 'In Stock' : 'Out of Stock';

export default function ProductPage() {
	const { id: productId } = useParams();
	const product = products.find((product) => product._id === productId);

	return (
		<>
			<Link to='/' className='btn btn-light my-3'>
				Go Back
			</Link>
			<Row>
				<Col md={5}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={4}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={formattedReviewCount(product.numReviews)}
							/>
						</ListGroup.Item>
						<ListGroup.Item>
							<h3>${product.price}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<p>{product.description}</p>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										<strong>
											{productStatus(
												product.countInStock
											)}
										</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className='btn-block'
									type='button'
									disabled={product.countInStock === 0}
								>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
}
