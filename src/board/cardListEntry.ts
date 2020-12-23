import Card from '../cards/card';

export interface CardListEntryProps {
    card: Card;
    quantity: number;
}

export default class CardListEntry {
    public card: Card;
    public quantity: number;

    constructor(props: CardListEntryProps) {
        this.card = props.card;
        this.quantity = props.quantity;
    }
}
