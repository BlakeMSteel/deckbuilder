export interface ResourcePoolProps {
    neutral: number;
    red: number;
    green: number;
    white: number;
}

export default class ResourcePool {
    public neutral: number;
    public red: number;
    public green: number;
    public white: number;

    constructor(props: ResourcePoolProps) {
        this.neutral = props.neutral;
        this.red = props.red;
        this.green = props.green;
        this.white = props.white;
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
}
