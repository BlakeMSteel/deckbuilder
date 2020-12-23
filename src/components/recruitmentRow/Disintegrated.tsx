import React from 'react';
import { Card } from 'react-bootstrap';
import GameCard from '../../cards/card';

interface DisintegratedProps {
    disintegratedPile: Array<GameCard>;
}

export default class Disintegrated extends React.Component<DisintegratedProps> {
    render() {
        return (
            <div style={{ flex: '1' }}>
                <Card style={{ width: '12rem', height: '16rem' }}>
                    <Card.Body>
                        <Card.Title>Disintegrated</Card.Title>
                        <Card.Subtitle>
                            {this.props.disintegratedPile.length} Cards
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
