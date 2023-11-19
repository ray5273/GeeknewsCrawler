# GeekNews Crawler

## 1. Introduction

## 2. Requirements

### Runtime
- NodeJS

### Development
- Podman

## 3. Installation

- install npm libraries

```bash
npm install
```

```agsl
npm run build
```


## 4. Deployment

```bash
podman build -t typescript-app .
```

```bash
podman run -d --name my-typescript-app typescript-app
```


