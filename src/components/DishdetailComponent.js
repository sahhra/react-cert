import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardBody>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else return <div></div>;
};

const RenderComments = ({ comments }) => {
  let fmt2 = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (comments !== null && comments !== undefined) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>

        {comments.map((comment) => {
          let date = new Date(comment.date);
          return (
            <ul className="list-unstyled" key={comment.id}>
              <li>{comment.comment}</li>
              <li>
                -- {comment.author} , {fmt2.format(date)}
              </li>
            </ul>
          );
        })}
      </div>
    );
  } else return <div></div>;
};

const DishDetail = ({ comments, dish }) => {
  console.log("comments", comments);
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments comments={comments} />
      </div>
    </div>
  );
};

export default DishDetail;
