import React, { Component } from "react";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

/* 
Dispatch is the dispatch function from ../redux/configureStore.js
the addComment function call will return the action call for the dispatch function

fetchDishes:
dispatch the thunk by using dispatch in order to do the dispatch
*/
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => {
    dispatch(addComment(dishId, rating, author, comment))
    fetchDishes: () => {dispatch(fetchDishes())} // thunk
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
/*
connect(arg1, arg2) explained:
https://react-redux.js.org/using-react-redux/connect-mapstate
https://react-redux.js.org/using-react-redux/connect-mapdispatch
*/