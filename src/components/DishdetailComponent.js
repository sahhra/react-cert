import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardBody>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments = (comments) => {
    let data = <div></div>;

    let fmt2 = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    if (comments !== null && comments !== undefined) {
      data = comments.map((comment) => {
        let date = new Date(comment.date);
        return (
          <ul className="list-unstyled" key={comment.id}>
            <li>{comment.comment}</li>
            <li>
              -- {comment.author} , {fmt2.format(date)}
            </li>
          </ul>
        );
      });
    }

    return data;
  };

  render() {
    const { dish } = this.props;

    const comments = dish !== null ? dish.comments : null;

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
        <div className="col-12 col-md-5 m-1">
          {comments !== null && <h4>Comments</h4>}
          {this.renderComments(comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
