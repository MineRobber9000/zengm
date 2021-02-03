import type { Position } from "../../../common/types.hockey";

export type TeamNum = 0 | 1;

export type CompositeRating =
	| "pace"
	| "playmaker"
	| "power"
	| "grinder"
	| "enforcer"
	| "sniper"
	| "faceoffs"
	| "goalkeeping"
	| "blocking"
	| "scoring";

export type PlayerGameSim = {
	id: number;
	name: string;
	age: number;
	pos: string;
	valueNoPot: number;
	stat: any;
	compositeRating: any;
	skills: string[];
	injured: boolean;
	ptModifier: number;
	ovrs: Record<Position, number>;
};

export type PlayersOnIce = Record<Position, PlayerGameSim[]>;

export type TeamGameSim = {
	id: number;
	pace: number;
	// mean number of possessions the team likes to have in a game
	stat: any;
	player: PlayerGameSim[];
	compositeRating: any;
	depth: Record<Position, PlayerGameSim[]>;
};
