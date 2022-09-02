class Player {
    name: string;
    jersey: number;

    constructor(name: string, jersey: number){
        this.name = name;
        this.jersey = jersey;
    }
};


class BasketBallPlayer extends Player{
    slamDunks:number;
    constructor(name: string, jersey: number, slamDunks:number = 0){
        super(name, jersey);
        this.slamDunks = slamDunks;
    }
};

class BaseBallPlayer extends Player{
    homeRuns:number;
    constructor(name: string, jersey: number, homeRuns:number = 0){
        super(name, jersey);
        this.homeRuns = homeRuns;
    }
};
