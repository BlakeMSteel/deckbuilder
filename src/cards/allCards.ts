import Player from '../player/player';
import Card from './card';
import ResourcePool from './resourcePool';

export const SampleCard: Card = new Card({
    name: 'Sample Card',
    rulesText: 'Draw a card',
    cost: new ResourcePool({
        neutral: 1
    }),
    image:
        'https://cdn.shopify.com/s/files/1/1601/3103/articles/ArtID_400210_-_Terminate_Size_Final01_1500x.jpg?v=1489512386',
    playEffect: (player: Player) => {
        player.drawCard();
    }
});
