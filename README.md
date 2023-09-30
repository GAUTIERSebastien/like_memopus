# Like_Memopus

Reproduction du comportement de l'application memopus.com

## Aide à l'installation

### Installer react avec typescript
```bash
npx create-react-app NomDuDossier --template typescript
```

### Installer react-router
```bash
npm install react-router-dom
```

### Snippet 
```javascript
slr // + entrer => snippet pour créer un composant
```

### Bootstrap

#### installer Bootstrap
```bash
npm install bootstrap@5
```
```javascript
import 'bootstrap/dist/css/bootstrap.css'; // dans index.tsx
```
#### Installer Bootstrap => react (auto-compilation scss)
```bash
npm i bootstrap react-bootstrap
```

### Json server

#### Installer json server
```bash
npm install -g json-server
```
#### Démarrer json server
```bash
json-server --watch db.json
```
```bash
json-server --watch db.json --port 3001
```
