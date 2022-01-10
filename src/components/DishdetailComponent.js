import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">{dish.id}</div>
          <div className="col-12 col-md-5 m-1">{dish.comments}</div>
        </div>
      );
    }
    return <div></div>;
  }

  render() {
    const dish = this.props.selectedDish;

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{dish.id}</div>
        <div className="col-12 col-md-5 m-1">{dish.comments}</div>
      </div>
    );
  }
}

export default DishDetail;
