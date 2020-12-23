import React from 'react';
import { Card } from 'react-bootstrap';
import GameCard from '../../cards/card';

interface DiscardProps {
    discardPile: Array<GameCard>;
}

export default class Discard extends React.Component<DiscardProps> {
    render() {
        return (
            <div style={{ flex: '1' }}>
                <Card style={{ width: '12rem', height: '16rem' }}>
                    <Card.Body>
                        <Card.Title>Discard Pile</Card.Title>
                        <Card.Subtitle>
                            {this.props.discardPile.length} Cards
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
