import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Home = () => {
    return(
        <div>
            <Jumbotron >
                <h1 className="display-3">Learn Courses</h1>
                <p>Learn every course with basic and clear all your concept regarding this Course</p>
                <Button outline color="info" className="my-1">Start Using</Button>
            </Jumbotron>
        </div>
    );
}
export default Home;