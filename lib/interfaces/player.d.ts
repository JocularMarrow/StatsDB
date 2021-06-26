export interface IPlayer {
    code: number;
    message: string;
    timestamp: number;
    error: boolean;
    payload: Payload;
    count: number;
}
export interface Payload {
    exists: boolean;
    system: System;
    user: User;
    preview: Preview[];
    stats: Stats;
}
export interface Preview {
    name: string;
    ltid: string;
    value: number | string;
}
export interface Stats {
    seasonal: Seasonal;
    progression: Progression;
    general: {
        [key: string]: number;
    };
    lastPlayed: {
        [key: string]: number;
    };
    pve: Pve;
    ranked: RecruitClass;
    casual: RecruitClass;
    gamemodes: Gamemodes;
    operators: Operator[];
    recruits: RecruitClass[];
    weapons: Weapon[];
    weaponDetails: WeaponDetail[];
    matches: Charts;
    charts: Charts;
    history: {
        [key: string]: History;
    };
    rank: Rank;
    unranked: Rank;
}
export interface RecruitClass {
    kills: number;
    deaths: number;
    wins: number;
    losses: number;
    matchesplayed?: number;
    timeplayed: number;
    name?: string;
}
export interface Charts {
    ranked: CasualElement[];
    casual: CasualElement[];
    unranked: CasualElement[];
}
export interface CasualElement {
    mmr: number;
    wins: number;
    losses: number;
    abandons: number;
    kills: number;
    deaths: number;
    season: number;
    date?: string;
    modified: number;
    api: number;
    rank?: number;
    last?: Last;
    mmr_change?: number;
    rank_change?: number;
}
export interface Last {
    mmr_change: number;
}
export interface Gamemodes {
    bomb: Bomb;
    hostage: Bomb;
    securearea: Bomb;
}
export interface Bomb {
    bestscore: number;
    wins: number;
    losses: number;
    matchesplayed: number;
}
export interface History {
    emea?: Emea;
    ncsa?: Emea;
    apac?: Emea;
}
export interface Apac {
    noMatchesPlayed: boolean;
}
export interface Emea {
    noMatchesPlayed: boolean;
    rank?: number;
    mmr?: number;
    skill_stdev?: number;
    max_rank?: number;
    max_mmr?: number;
    season?: number;
    kills?: number;
    deaths?: number;
    wins?: number;
    losses?: number;
    abandons?: number;
    last_match_mmr_change?: number;
    top_rank_position?: number;
    last_match_skill_mean_change?: number;
    last_match_result?: number;
    next_rank_mmr?: number;
    previous_rank_mmr?: number;
    update_time?: number;
    banned?: boolean;
}
export interface Operator {
    id: string;
    kills: number;
    deaths: number;
    headshots: number;
    meleekills: number;
    dbno: number;
    wins: number;
    losses: number;
    roundsplayed: number;
    timeplayed: number;
    totalxp: number;
}
export interface Progression {
    level: number;
    lootbox_probability: number;
    xp: number;
}
export interface Pve {
    timeplayed: number;
}
export interface Rank {
    rank: number;
    mmr: number;
    skill_stdev: number;
    max_rank?: number;
    max_mmr?: number;
    season: number;
    kills: number;
    deaths: number;
    wins: number;
    losses: number;
    abandons: number;
    last_match_mmr_change: number;
    top_rank_position?: number;
    last_match_skill_mean_change: number;
    last_match_result: number;
    next_rank_mmr?: number;
    previous_rank_mmr?: number;
    update_time: number;
    noMatchesPlayed: boolean;
    banned: boolean;
}
export interface Seasonal {
    ranked: Rank;
    casual: Rank;
}
export interface WeaponDetail {
    key: string;
    name: string;
    fired: number;
    hits: number;
    headshots: number;
    kills: number;
    deaths: number;
}
export interface Weapon {
    id: string;
    fired: number;
    hits: number;
    headshots: number;
    kills: number;
    deaths: number;
}
export interface System {
    available: boolean;
    gdpr: boolean;
    bans: any[];
    cache: Cache;
    notifications: any[];
    background: Background;
    claim: Claim;
}
export interface Background {
    url: string;
    blured: boolean;
    position: string;
}
export interface Cache {
    last: number;
    next: number;
    status: string;
    request: number;
}
export interface Claim {
    id: string;
    accountId: string;
    timestamp: number;
    settings: any[];
    socials: Socials;
}
export interface Socials {
    twitter: string;
    instagram: string;
    faceit: string;
    youtube: string;
}
export interface User {
    id: string;
    nickname: string;
    urlFriendlyNickname: string;
    tag: boolean;
    platform: string;
    avatar: string;
    smallAvatar: string;
    url: string;
    aliases: Alias[];
    corsAvatar: string;
    authority: string;
    countryCode: boolean;
    status: Status;
}
export interface Alias {
    nickname: string;
    timestamp: number;
}
export interface Status {
    type: number;
    game: string;
}
//# sourceMappingURL=player.d.ts.map