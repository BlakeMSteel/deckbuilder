import Card from '../cards/card';
import CardDeck from '../cards/cardDeck';
import Player from '../player/player';
import CardListEntry from './cardListEntry';
import RecruitmentRow from './recruitmentRow';

export interface BoardProps {
    cardList: Array<CardListEntry>;
}

export default class Board {
    protected disintegratedCards: Array<Card>;
    protected cardDeck: CardDeck;
    protected recruitmentRow: RecruitmentRow;

    constructor(props: BoardProps) {
        this.disintegratedCards = [];

        let cards: Array<Card> = [];
        props.cardList.forEach((cardListEntry) => {
            for (let i = 0; i < cardListEntry.quantity; i++) {
                cards.push(cardListEntry.card);
            }
        });
        this.cardDeck = new CardDeck({ cards });

        this.recruitmentRow = new RecruitmentRow();
        for (let i = 0; i < 5; i++) {
            this.addOneToRecruitmentRowFromDeck();
        }
    }

    private addOneToRecruitmentRowFromDeck() {
        const drawnCard = this.cardDeck.drawCard();
        if (drawnCard) {
            this.recruitmentRow.addCard(drawnCard);
        }
    }

    public purchaseCardForPlayer(cardIndex: number, player: Player) {
        if (this.canPlayerAffordCard(cardIndex, player)) {
            const boughtCard = this.recruitmentRow.removeCard(cardIndex);
            player.recruit(boughtCard);
            this.addOneToRecruitmentRowFromDeck();
        }
    }

    public canPlayerAffordCard(cardIndex: number, player: Player) {
        const cardOnRecruitmentRow = this.recruitmentRow.getCard(cardIndex);
        if (cardOnRecruitmentRow) {
            return player.canAfford(cardOnRecruitmentRow);
        }
        return false;
    }
}
