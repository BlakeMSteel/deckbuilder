import React from 'react';
import { Button, Card } from 'react-bootstrap';
import RecruitmentRow from '../../board/recruitmentRow';

interface RecruitableProps {
    recruitableCards: RecruitmentRow;
}

export default class Recruitable extends React.Component<RecruitableProps> {
    render() {
        return (
            <div
                style={{ flex: '8', display: 'flex', justifyContent: 'center' }}
            >
                {this.props.recruitableCards.getCards().map((card) => {
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
                                <Card.Subtitle>
                                    Cost: {cardInfo.cost.toString()}
                                </Card.Subtitle>
                                <Card.Text>{cardInfo.rulesText}</Card.Text>
                                <Button variant="primary">Purchase</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        );
    }
}
