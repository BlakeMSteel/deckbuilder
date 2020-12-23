import React from 'react';
import RecruitmentRow from './recruitmentRow/RecruitmentRow';
import PlayerField from './playerField/PlayerField';
import PlayerZones from './playerZones/PlayerZones';
import GameManager from '../gameManager';

interface GameBoardProps {}

interface GameBoardState {
    gameInstance: GameManager;
}

export default class GameBoard extends React.Component<
    GameBoardProps,
    GameBoardState
> {
    constructor(props: GameBoardProps) {
        super(props);

        this.state = {
            gameInstance: new GameManager()
        };
    }

    render() {
        return (
            <div
                style={{
                    position: 'relative',
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <RecruitmentRow board={this.state.gameInstance.getBoard()} />
                <PlayerField />
                <PlayerZones
                    player={this.state.gameInstance.getCurrentPlayer()}
                />
            </div>
        );
    }
}
