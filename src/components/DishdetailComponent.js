import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List } from 'reactstrap';


    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={this.props.selectedDish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    function RenderComments({comment}) {
        return (
            comment.map((comments) => {
                return (
                    <li key={comments.id}>
                        <p>{comments.comment}</p>
                        <p>-- {comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}</p>
                    </li>
                )
            })
        )
    }


    const DishDetail = (props) => {
        return (
            <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish={props.selectedDish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <List type='unstyled'>
                        <RenderComments comments={props.selectedDish.comments} />
                    </List>
                </div>
            </div>
            </div>
        )
    }


export default DishDetail;
/*

*/