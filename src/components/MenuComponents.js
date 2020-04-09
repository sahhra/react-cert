import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import Details from "./DishDetailComponents";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <Details
            image={this.state.selectedDish.image}
            name={this.state.selectedDish.name}
            description={this.state.selectedDish.description}
          />
        </Card>
      );
    } else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null) {
      const dishComments = dish.comments.map((item) => {
        return (
          <li>
            <p>{item.comment}</p>
            <p>
              --{item.author}, {item.date.substring(0, 10)}
            </p>
          </li>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          {dishComments}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>
                <h4>{dish.name}</h4>
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-md-5 m-1">
            <ul class="list-unstyled">
              {this.renderComments(this.state.selectedDish)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
