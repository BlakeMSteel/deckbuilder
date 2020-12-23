import CardListEntry from '../board/cardListEntry';
import Card from '../cards/card';
import CardDeck from '../cards/cardDeck';
import ResourcePool from '../cards/resourcePool';

export interface PlayerProps {
    startingCards: Array<CardListEntry>;
}

export default class Player {
    protected deck: CardDeck;
    protected hand: Array<Card>;
    protected discardPile: Array<Card>;
    protected cardsInPlay: Array<Card>;
    protected currentResources: ResourcePool;
    protected influence: number;
    protected power: number;

    constructor(props: PlayerProps) {
        this.currentResources = new ResourcePool({
            neutral: 0,
            red: 0,
            green: 0,
            white: 0
        });
        this.influence = 30;
        this.power = 0;
        this.discardPile = [];
        this.cardsInPlay = [];

        let cards: Array<Card> = [];
        props.startingCards.forEach((cardListEntry) => {
            for (let i = 0; i < cardListEntry.quantity; i++) {
                cards.push(cardListEntry.card);
            }
        });
        this.deck = new CardDeck({ cards });
        this.deck.shuffle();

        this.hand = [];
        for (let i = 0; i < 5; i++) {
            this.drawCard();
        }
    }

    public getHand() {
        return this.hand;
    }

    public getDeckSize() {
        return this.deck.getDeckSize();
    }

    public getDiscardPile() {
        return this.discardPile;
    }

    public drawCard() {
        const drawnCard = this.deck.drawCard();
        if (drawnCard) {
            this.hand.push(drawnCard);
        } else if (this.discardPile.length > 0) {
            this.shuffleDiscardIntoDeck();
            this.drawCard();
        }
    }

    private shuffleDiscardIntoDeck() {
        this.deck.addCards(this.discardPile);
        this.discardPile = [];
        this.deck.shuffle();
    }

    public canAfford(card: Card) {
        return card.canAffordWith(this.currentResources);
    }

    public recruit(card: Card) {
        if (this.canAfford(card)) {
            card.purchaseWith(this.currentResources);
            this.discardPile.push(card);
        }
    }

    private playCard(cardIndex: number) {
        if (cardIndex >= 0 && cardIndex < this.hand.length) {
            const playedCard = this.hand.splice(cardIndex, 1)[0];
            playedCard.play(this);
            this.cardsInPlay.push(playedCard);
        }
    }
}
