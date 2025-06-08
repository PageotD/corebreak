export class RankingPage {
    public render(onNavigate: (page: string) => void): HTMLElement {
        const container = document.createElement('div');
        container.innerHTML = '<p>Ranking</p><button id="back">Back</button>';
        container.querySelector('#back')!.onclick = () => onNavigate('home');
        return container;
    }
}
