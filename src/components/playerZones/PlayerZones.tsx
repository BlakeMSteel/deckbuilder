import React from 'react';
import Player from '../../player/player';
import Hand from './Hand';

interface PlayerZonesProps {
    player: Player;
}

export default class PlayerZones extends React.Component<PlayerZonesProps> {
    constructor(props: PlayerZonesProps) {
        super(props);
    }

    render() {
        return (
            <div style={{ position: 'absolute', bottom: '0', display: 'flex' }}>
                <p>Deck</p>
                <Hand cards={this.props.player.getHand()} />
                <p>Discard</p>
            </div>
        );
    }
}
