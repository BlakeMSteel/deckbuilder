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
        return (
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '0',
                    display: 'flex'
                }}
            >
                <RecruitmentDeck />
                <Recruitable
                    recruitableCards={this.props.board.getRecruitmentRow()}
                />
                <Disintegrated />
            </div>
        );
    }
}
