import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return <Loading />;
    } else if (errMess) {
        return <h4>{errMess}</h4>;
    } else
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: "scale(0.5) translateY(-50%)",
                }}
            >
                <Card>
                    <div className="home--image--container">
                        <CardImg
                            className="home--image"
                            src={`${baseUrl}images/${item.image}`}
                            alt={item.name}
                        />
                    </div>
                    <CardBody className="home--card-body">
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? (
                            <CardSubtitle>{item.designation}</CardSubtitle>
                        ) : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-flex-start justify-content-center">
                <div className="col-12 col-md m-1 text-decoration-none home--cards">
                    <Link to="menu/">
                        <RenderCard
                            item={props.dish}
                            isLoading={props.dishesLoading}
                            errMess={props.dishesErrMess}
                        />
                    </Link>
                </div>
                <div className="col-12 col-md m-1 text-decoration-none home--cards">
                    <RenderCard
                        item={props.promotion}
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1 text-decoration-none home--cards">
                    <Link to="aboutus/">
                        <RenderCard
                            item={props.leader}
                            isLoading={props.leaderLoading}
                            errMess={props.leaderErrMess}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
