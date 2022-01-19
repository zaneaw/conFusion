import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const minLen = (len) => (val) => val && val.length >= len;
const maxLen = (len) => (val) => !val || val.length <= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }

  render() {
    return (
      <>
        <div className="row">
          <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil"> Submit Comment</span>
          </Button>
        </div>
        <div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Col className="form-group">
                  <Row className="form-group">
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select
                      model=".rating"
                      id="rating"
                      className="form-control"
                    >
                      <option value="1" model=".rating" name="1">
                        1
                      </option>
                      <option value="2" model=".rating" name="2">
                        2
                      </option>
                      <option value="3" model=".rating" name="3">
                        3
                      </option>
                      <option value="4" model=".rating" name="4">
                        4
                      </option>
                      <option value="5" model=".rating" name="5">
                        5
                      </option>
                    </Control.select>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="author">Your Name</Label>
                    <Control.text
                      model=".author"
                      id="author"
                      name="author"
                      placeholder="Your Name"
                      className="form-control"
                      validators={{
                        minLength: minLen(3),
                        maxLength: maxLen(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        minLength: " Must be greater than 2 characters ",
                        maxLength: " Must be less than 15 characters ",
                      }}
                    />
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="comment">Comment</Label>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      rows="6"
                      className="form-control"
                    />
                  </Row>
                  <Row className="form-group">
                    <Button type="submit" value="submit" className="bg-primary">
                      Submit
                    </Button>
                  </Row>
                </Col>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  }
}

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
        <CommentForm />
      </div>
    );
  } else {
    return <div />;
  }
};

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
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
    );
  } else {
    return <div />;
  }
};

export default DishDetail;
