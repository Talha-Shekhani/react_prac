import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function RenderDish({dish}) {
    if (dish != null) {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else
        return (
            <div></div>
        )
}

function RenderComments({comments}) {    
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <h4>Comment</h4>
                    <CardBody>
                        {comments.map((comment) => {
                            return (
                                <div className="container" key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat("en-US", {year: "numeric", month: "long", day: "2-digit"}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                            )
                        })}
                        
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

const DishDetail = (props) => {
    if (props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
            </div>
            </div>
        )
    }
    
}

export default DishDetail