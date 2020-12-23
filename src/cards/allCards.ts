import Player from '../player/player';
import Card from './card';
import ResourcePool from './resourcePool';

export const SampleCard: Card = new Card({
    name: 'Sample Card',
    rulesText: 'Draw a card',
    cost: new ResourcePool({
        neutral: 1
    }),
    playEffect: (player: Player) => {
        player.drawCard();
    }
});
