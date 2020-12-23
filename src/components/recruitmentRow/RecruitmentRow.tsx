import React from 'react';
import Board from '../../board/board';
import Disintegrated from './Disintegrated';
import Recruitable from './Recruitable';
import RecruitmentDeck from './RecruitmentDeck';

interface RecruitmentRowProps {
    board: Board;
}

export default class RecruitmentRow extends React.Component<RecruitmentRowProps> {
    render() {
        const { board } = this.props;
        return (
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '0',
                    display: 'flex'
                }}
            >
                <RecruitmentDeck deckSize={board.getDeckSize()} />
                <Recruitable recruitableCards={board.getRecruitmentRow()} />
                <Disintegrated disintegratedPile={board.getDisintegrated()} />
            </div>
        );
    }
}
