import React from 'react';
import { Button, Card } from 'react-bootstrap';
import GameCard from '../../cards/card';

interface HandProps {
    cards: Array<GameCard>;
}

export default class Hand extends React.Component<HandProps> {
    render() {
        return (
            <div style={{ display: 'flex' }}>
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
                                src="https://cdn.shopify.com/s/files/1/1601/3103/articles/ArtID_400210_-_Terminate_Size_Final01_1500x.jpg?v=1489512386"
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
