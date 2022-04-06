import React, { Component } from "react";
import { Control, Form, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    Row,
    Label,
    Col,
    Button,
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const validEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Signup extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.signupUser({
            username: values.username,
            password: values.password,
            email: values.email,
            firstname: values.firstname,
            lastname: values.lastname,
            admin: false,
        });
        this.props.resetSignupForm();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Signup</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Signup</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-9">
                        <Form
                            model="signup"
                            onSubmit={(values) => this.handleSubmit(values)}
                        >
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>
                                    First Name
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>
                                    Last Name
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>
                                    Email
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required ",
                                            validEmail: "Invalid Email Address",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="username" md={2}>
                                    Username
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".username"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength:
                                                "Must be 3 characters or more",
                                            maxLength:
                                                "Must be 15 characters or less",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={2}>
                                    Password
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password2" md={2}>
                                    Confirm Password
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".password2"
                                        id="password2"
                                        name="password2"
                                        placeholder="Confirm Password"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".password2"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Button
                                type="submit"
                                value="submit"
                                className="signup--button"
                            >
                                Signup
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
