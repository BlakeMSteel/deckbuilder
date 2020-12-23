import Card from './card';

export interface CardDeckProps {
    cards: Array<Card>;
}

export default class CardDeck {
    private cards: Array<Card>;

    constructor(props: CardDeckProps) {
        this.cards = props.cards;
    }

    public shuffle() {
        let shuffledCards: Array<Card> = [];
        const numberOfCards = this.cards.length;
        for (let i = 0; i < numberOfCards; i++) {
            const randomIndex = Math.floor(Math.random() * this.cards.length);
            const randomCard = this.cards.splice(randomIndex, 1)[0];
            shuffledCards.push(randomCard);
        }
        this.cards = shuffledCards;
    }

    public drawCard() {
        return this.cards.pop();
    }

    public addCards(cards: Array<Card>) {
        cards.forEach((card) => {
            this.cards.push(card);
        });
    }

    public getDeckSize() {
        return this.cards.length;
    }
}
