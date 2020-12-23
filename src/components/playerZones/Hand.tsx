import React from 'react';
import { Button, Card } from 'react-bootstrap';
import GameCard from '../../cards/card';

interface HandProps {
    cards: Array<GameCard>;
}

export default class Hand extends React.Component<HandProps> {
    render() {
        return (
            <div
                style={{ display: 'flex', flex: '8', justifyContent: 'center' }}
            >
                {this.props.cards.map((card) => {
                    const cardInfo = card.getCardInfo();
                    return (
                        <Card
                            style={{
                                width: '12rem',
                                height: '16rem'
                            }}
                        >
                            <Card.Img
                                style={{ height: '6rem', objectFit: 'cover' }}
                                src={cardInfo.image}
                            />
                            <Card.Body>
                                <Card.Title>{cardInfo.name}</Card.Title>
                                <Card.Text>{cardInfo.rulesText}</Card.Text>
                                <Button variant="primary">Play</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        );
    }
}
