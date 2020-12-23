import React from 'react';
import RecruitmentRow from './RecruitmentRow';
import PlayerField from './PlayerField';
import PlayerZones from './PlayerZones';

export default class GameBoard extends React.Component {
    render() {
        return (
            <>
                <RecruitmentRow />
                <PlayerField />
                <PlayerZones />
            </>
        );
    }
}
