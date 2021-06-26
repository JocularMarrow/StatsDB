export interface IConfig {
    code: number;
    message: string;
    timestamp: number;
    error: boolean;
    payload: Payload;
    count: number;
}
export interface Payload {
    liveStream: LiveStream;
    season: number;
    operators: {
        [key: string]: Operator;
    };
    weapons: {
        [key: string]: Weapon;
    };
    seasons: {
        [key: string]: Season;
    };
    modified: number;
}
export interface LiveStream {
    enabled: boolean;
    start: number;
    end: number;
}
export interface Operator {
    id: string;
    category: Category;
    name: string;
    ctu: string;
    index: string;
    figure: Figure;
    mask: string;
    badge: string;
    uniqueStatistic?: {
        [key: string]: UniqueStatistic;
    };
    visible: boolean;
}
export declare enum Category {
    Atk = "atk",
    Def = "def"
}
export interface Figure {
    small: string;
    large: string;
}
export interface UniqueStatistic {
    statisticId: string;
    label: string;
}
export interface Season {
    name: string;
    background: Figure;
    color: string;
}
export interface Weapon {
    key: string;
    name: string;
    type: Type;
    slot: Slot;
    typeId: string;
}
export declare enum Slot {
    Primary = "primary",
    Secondary = "secondary"
}
export declare enum Type {
    AssaultRifles = "Assault Rifles",
    Handguns = "Handguns",
    LightMachineGuns = "Light Machine Guns",
    MachinePistols = "Machine Pistols",
    MarksmanRifles = "Marksman Rifles",
    Shotguns = "Shotguns",
    SubmachineGuns = "Submachine Guns"
}
//# sourceMappingURL=config.d.ts.map