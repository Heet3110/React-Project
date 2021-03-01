import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

function Header () {
    return (
        <div>
            <Card className="text-center py-3 my-4 bg-warning ">
                <CardBody >
                    <CardTitle>
                        <h1>Welcome to Couses Application</h1>
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}
export default Header;