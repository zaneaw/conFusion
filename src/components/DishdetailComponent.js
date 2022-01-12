import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.renderDish = this.renderDish.bind(this);
    // this.renderComments = this.renderComments.bind(this);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return (<div />);
  }

  render() {
    const renderComments = this.props.dish.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <li>{comment.comment}</li>
          <br />
          <li>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </li>
          <br />
        </div>
      );
    });
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        {renderComments != null && (
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">{renderComments}</ul>
          </div>
        )}
      </div>
    );
  }
}

export default DishDetail;
