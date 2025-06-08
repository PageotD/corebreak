// src/core/usecases/userManager.ts
import type { User, GameHistoryEntry } from '../entities/user.ts';

export class UserManager {
    private static STORAGE_KEY = 'corebreak_user';

    private hashPassword(password: string): string {
        return btoa(password); // remplace with crypto.subtle.digest (future)
    }

    public register(username: string, password: string): boolean {
        const existing = this.loadUser();
        if (existing) return false; // user already exists (mono-user)

        const user: User = {
            id: crypto.randomUUID(),
            username,
            passwordHash: this.hashPassword(password),
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            history: [],
        };

        this.saveUser(user);
        return true;
    }

    public login(username: string, password: string): boolean {
        const user = this.loadUser();
        if (!user || user.username !== username) return false;
        if (user.passwordHash !== this.hashPassword(password)) return false;

        user.lastLogin = new Date().toISOString();
        this.saveUser(user);
        return true;
    }

    public getCurrentUser(): User | null {
        return this.loadUser();
    }

    public addScore(coreLevel: number, score: number): void {
        const user = this.loadUser();
        if (!user) return;
        user.history.push({
            date: new Date().toISOString(),
            coreLevel,
            score
        });
        this.saveUser(user);
    }

    private saveUser(user: User): void {
        localStorage.setItem(UserManager.STORAGE_KEY, JSON.stringify(user));
    }

    private loadUser(): User | null {
        const raw = localStorage.getItem(UserManager.STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    }

    public logout(): void {
        localStorage.removeItem(UserManager.STORAGE_KEY);
    }
}
