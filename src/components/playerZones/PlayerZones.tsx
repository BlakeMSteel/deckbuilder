import React from 'react';
import Player from '../../player/player';
import Deck from './Deck';
import Discard from './Discard';
import Hand from './Hand';

interface PlayerZonesProps {
    player: Player;
}

export default class PlayerZones extends React.Component<PlayerZonesProps> {
    constructor(props: PlayerZonesProps) {
        super(props);
    }

    render() {
        const { player } = this.props;
        return (
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    bottom: '0',
                    display: 'flex'
                }}
            >
                <Deck deckSize={player.getDeckSize()} />
                <Hand cards={player.getHand()} />
                <Discard discardPile={player.getDiscardPile()} />
            </div>
        );
    }
}
