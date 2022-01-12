import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.renderDish = this.renderDish.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    return <div />;
  }

  renderComments(dish) {
    if (dish != null) {
      const commentArr = dish.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <li>{comment.comment}</li>
            <li>-- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
            <br />
          </div>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">{commentArr}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderDish(this.props.dish)}
        {this.renderComments(this.props.dish)}
      </div>
    );
  }
}

export default DishDetail;
