import Board from './board/board';
import CardListEntry from './board/cardListEntry';
import { SampleCard } from './cards/allCards';
import Player from './player/player';

export interface GameManagerProps {}

export default class GameManager {
    private currentPlayer: number;
    private players: Array<Player>;
    private board: Board;

    constructor(props?: GameManagerProps) {
        this.players = [
            new Player({
                startingCards: [
                    new CardListEntry({
                        card: SampleCard,
                        quantity: 10
                    })
                ]
            })
        ];
        this.currentPlayer = 0;

        this.board = new Board({
            cardList: [
                new CardListEntry({
                    card: SampleCard,
                    quantity: 10
                })
            ]
        });
    }

    public getCurrentPlayer() {
        return this.players[this.currentPlayer];
    }

    public getBoard() {
        return this.board;
    }
}
