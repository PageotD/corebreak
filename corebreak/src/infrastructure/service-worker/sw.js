if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registration successful:', registration.scope);
            })
            .catch(error => {
                console.error('Error during Service Worker registration :', error);
            });
    });
}