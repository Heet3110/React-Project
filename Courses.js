import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Courses = () => {
    return(
        <Form>
            <h1 className="text-center">Fill Course Detail</h1>
            <FormGroup>
                <Label for="Course-id">Course Id</Label>
                <Input type="text" placeholder="enter here" id="Course-id"/>
            </FormGroup>

            <FormGroup>
                <Label for="Course-title">Course Title</Label>
                <Input type="text" placeholder="enter here" id="Course-title"/>
            </FormGroup>

            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
             </FormGroup>

            <Button outline color="success">Add Course</Button>
            <Button outline color="danger" className="m-3">Reset</Button>
        </Form>
    );
}
export default Courses;