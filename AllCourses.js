import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const AllCourses = () => {
      return (
          <div className="text-center">
              <Card>
                  <CardBody>
                      <CardTitle>Java Courses</CardTitle>
                      <CardText>This is demo course</CardText>
                      <Button color="danger">Delete</Button>
                      <Button color="success m-2">Update</Button>
                  </CardBody>
              </Card>

              <Card>
                  <CardBody>
                      <CardTitle>Python Courses</CardTitle>
                      <CardText>This is demo course</CardText>
                      <Button color="danger">Delete</Button>
                      <Button color="success m-2">Update</Button>
                  </CardBody>
              </Card>

              <Card>
                  <CardBody>
                      <CardTitle>React-js Courses</CardTitle>
                      <CardText>This is demo course</CardText>
                      <Button color="danger">Delete</Button>
                      <Button color="success m-2">Update</Button>
                  </CardBody>
              </Card>
          </div>
      );
  }
  export default AllCourses;