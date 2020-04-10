import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = ({ dish }) => {
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
};

const RenderComments = ({ comments }) => {
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

const DishDetail = (props) => {
  const { dish } = props;
  const comments = dish !== null && dish !== undefined ? dish.comments : null;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          {comments !== null && <h4>Comments</h4>}
          <RenderComments comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
