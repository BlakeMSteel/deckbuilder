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
        for (let i = 0; i < this.cards.length; i++) {
            const randomIndex = Math.floor(
                Math.random() * (this.cards.length - i)
            );
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
}
