export interface ResourcePoolProps {
    neutral?: number;
    red?: number;
    green?: number;
    white?: number;
}

export default class ResourcePool {
    public neutral: number;
    public red: number;
    public green: number;
    public white: number;

    constructor(props: ResourcePoolProps) {
        this.neutral = props.neutral ? props.neutral : 0;
        this.red = props.red ? props.red : 0;
        this.green = props.green ? props.green : 0;
        this.white = props.white ? props.white : 0;
    }

    public isLessThan(resourcePool: ResourcePool) {
        return (
            this.neutral < resourcePool.neutral &&
            this.red < resourcePool.red &&
            this.green < resourcePool.green &&
            this.white < resourcePool.white
        );
    }

    public subtractBy(resourcePool: ResourcePool) {
        if (this.isLessThan(resourcePool)) {
            this.neutral -= resourcePool.neutral;
            this.red -= resourcePool.red;
            this.green -= resourcePool.green;
            this.white -= resourcePool.white;
        }
    }

    public toString() {
        let resourceString = this.neutral.toString();
        for (let i = 0; i < this.red; i++) {
            resourceString += 'R';
        }
        for (let i = 0; i < this.green; i++) {
            resourceString += 'G';
        }
        for (let i = 0; i < this.white; i++) {
            resourceString += 'W';
        }
        return resourceString;
    }
}
