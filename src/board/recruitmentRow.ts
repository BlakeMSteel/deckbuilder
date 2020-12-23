import Card from '../cards/card';

export interface RecruitmentRowProps {
    cards: Array<Card>;
}

export default class RecruitmentRow {
    protected recruitableCards: Array<Card>;

    constructor(props?: RecruitmentRowProps) {
        if (props) {
            this.recruitableCards = props.cards;
        } else {
            this.recruitableCards = [];
        }
    }

    public getCards() {
        return this.recruitableCards;
    }

    public getCard(cardIndex: number) {
        if (cardIndex >= 0 && cardIndex < this.recruitableCards.length) {
            return this.recruitableCards[cardIndex];
        }
    }

    public removeCard(cardIndex: number) {
        return this.recruitableCards.splice(cardIndex, 1)[0];
    }

    public addCard(card: Card) {
        this.recruitableCards.push(card);
    }
}
