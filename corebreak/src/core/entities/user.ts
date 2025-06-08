export interface GameHistoryEntry {
    date: string;
    coreLevel: number;
    score: number;
}

export interface User {
    id: string;
    username: string;
    passwordHash: string;
    createdAt: string;
    lastLogin: string;
    history: GameHistoryEntry[];
}