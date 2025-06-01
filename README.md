# corebreak
A simple clone of Sphere Break, a Final Fantasy X-2 mini-game

## Architecture

```
corebreak/
├── src/
│   ├── core/
│   │   ├── entities/
│   │   └── usecases/
│   ├── data/
│   │   ├── local/
│   │   └── remote/
│   ├── presentation/
│   │   ├── components/
│   │   ├── pages/
│   │   └── router/
│   ├── infrastructure/
│   │   └── service-worker/
│   └── shared/
└── ... (others files at the root)
```

- **core/**
    - **entities/**: Domain entities.
    - **usecases/**: Domain use cases.
- **data/**
    - **local/**: Local data access (_localStorage_, DB, JSON).
    - **remote/**: Remote data access (Future).
- **presentation/**
    - **components/**: Reusable components.
    - **pages/**: Main pages.
    - **router/**: Router management.
- **infrastructure/**
    - **service-worker/**: Service worker and PWA cache.
- **shared/**: Shared files, utils, shared helpers.

## Licensing

- **Code**: Licensed under the MIT License. See [LICENSE-CODE.md](LICENSE-CODE.md).
- **Assets**: Licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). See [LICENSE-ASSETS.md](LICENSE-ASSETS.md).
