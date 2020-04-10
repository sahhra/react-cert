import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const { dishes, promotions, leaders, comments } = this.state;

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

export default Main;
