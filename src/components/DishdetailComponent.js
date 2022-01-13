import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = ({ dish }) => {
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
};

const RenderComments = ({ comments }) => {
  if (comments != null) {
    const commentArr = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <li>{comment.comment}</li>
          <li>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(comment.date))}
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
};

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.dish.comments} />
      </div>
    );
  } else {
    return <div />;
  }
};

export default DishDetail;
