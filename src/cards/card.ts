import Player from '../player/player';
import ResourcePool from './resourcePool';

export interface CardProps {
    name: string;
    rulesText: string;
    cost: ResourcePool;
    image: string;
    playEffect: (player: Player) => void;
}

export interface CardInfo {
    name: string;
    rulesText: string;
    cost: ResourcePool;
    image: string;
}

export default class Card {
    protected name: string;
    protected rulesText: string;
    protected cost: ResourcePool;
    protected image: string;
    protected playEffect: (player: Player) => void;

    constructor(props: CardProps) {
        this.name = props.name;
        this.rulesText = props.rulesText;
        this.cost = props.cost;
        this.image = props.image;
        this.playEffect = props.playEffect;
    }

    public canAffordWith(resourcePool: ResourcePool) {
        return this.cost.isLessThan(resourcePool);
    }

    public purchaseWith(resourcePool: ResourcePool) {
        resourcePool.subtractBy(this.cost);
    }

    public play(player: Player) {
        this.playEffect(player);
    }

    public getCardInfo() {
        return {
            name: this.name,
            rulesText: this.rulesText,
            cost: this.cost,
            image: this.image
        } as CardInfo;
    }
}
