import React from 'react';
import { Card } from 'react-bootstrap';

interface DeckProps {
    deckSize: number;
}

export default class Deck extends React.Component<DeckProps> {
    render() {
        return (
            <div style={{ flex: '1' }}>
                <Card style={{ width: '12rem', height: '16rem' }}>
                    <Card.Body>
                        <Card.Title>Your Deck</Card.Title>
                        <Card.Subtitle>
                            {this.props.deckSize} Cards
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
