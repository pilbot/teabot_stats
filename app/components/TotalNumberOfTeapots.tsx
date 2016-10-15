import React, { PropTypes } from "react";
import {Card, CardHeader, CardText} from "material-ui/Card";

interface TotalNumberOfTeapotsProps {
    numberOfTeapots: number;
}

const TotalNumberOfTeapots: React.StatelessComponent<TotalNumberOfTeapotsProps> = ({ numberOfTeapots }) => (
    <div className="card-margin">
        <Card>
            <CardHeader
                title="Number of Teapots"
                avatar="robot.jpg" />
            <CardText>
                {numberOfTeapots}
            </CardText>
        </Card>
    </div>
);

TotalNumberOfTeapots.propTypes = {
    numberOfTeapots: PropTypes.number.isRequired
};

export default TotalNumberOfTeapots;