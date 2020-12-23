import React from 'react';
import { Card } from 'react-bootstrap';

interface RecruitmentDeckProps {
    deckSize: number;
}

export default class RecruitmentDeck extends React.Component<RecruitmentDeckProps> {
    render() {
        return (
            <div style={{ flex: '1' }}>
                <Card style={{ width: '12rem', height: '16rem' }}>
                    <Card.Body>
                        <Card.Title>Recruitment Deck</Card.Title>
                        <Card.Subtitle>
                            {this.props.deckSize} Cards
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
