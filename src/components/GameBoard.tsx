import React from 'react';
import RecruitmentRow from './recruitmentRow/RecruitmentRow';
import PlayerField from './playerField/PlayerField';
import PlayerZones from './playerZones/PlayerZones';
import GameManager from '../gameManager';

interface GameBoardState {
    gameInstance: GameManager;
}

export default class GameBoard extends React.Component<{}, GameBoardState> {
    constructor() {
        super({});

        this.state = {
            gameInstance: new GameManager()
        };
    }

    render() {
        return (
            <div style={{ position: 'relative', height: '100vh' }}>
                <RecruitmentRow />
                <PlayerField />
                <PlayerZones
                    player={this.state.gameInstance.getCurrentPlayer()}
                />
            </div>
        );
    }
}
