import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import About from "./AboutComponent";

class Main extends Component {
  render() {
    const { dishes, promotions, leaders, comments } = this.props;
    console.log(this.props);
    const HomePage = () => {
      return (
        <Home
          dish={dishes.filter((dish) => dish.featured)[0]}
          promotion={promotions.filter((promotion) => promotion.featured)[0]}
          leader={leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={() => <HomePage />} />
          <Route path="/contactus" component={Contact} />
          <Route
            path="/aboutus"
            component={() => <About leaders={leaders} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            excat
            path="/menu"
            component={() => <Menu dishes={dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

export default withRouter(connect(mapStateToProps)(Main));
