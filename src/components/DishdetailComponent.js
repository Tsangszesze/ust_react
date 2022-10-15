import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
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

    renderComments(comment) {
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


    render() {
        return (
            <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <List type='unstyled'>
                        {this.renderComments(this.props.selectedDish.comments)}
                    </List>
                </div>
            </div>
            </div>
        )
    }
}

export default Dishdetail;
/*

*/