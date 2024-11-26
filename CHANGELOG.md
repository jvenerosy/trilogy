# Changelog trilogy-ds

## 4.X.X `@trilogy-ds/react`

### Breaking changes

* Pour améliorer la clarté du code, la structure d'importation de tous les éléments exportés (composants, helpers, services, context, etc.) a été réorganisée. Désormais, seuls les chemins d'importation (champ exports) déclarés dans le [package.json](packages/react/package.json#L44) sont accessibles.
* Tous les sous-composants et éléments internes ont été déplacés vers les fichiers `index.ts` du composant concerné.
* Les composant restent accessibles via le chemin d'importation principal `@trilogy-ds/react`, mais les développeurs sont encouragés à utiliser les chemins d'importation spécifiques pour chaque composant pour un meilleur Tree Shaking de `@trilogy-ds/react`.

```diff
- import ToasterContext from '@trilogy-ds/react/lib/esm/components/alert/context/ToasterContext'
- import { Alert } from '@trilogy-ds/react/lib/components/Alert'
+ import ToasterContext from '@trilogy-ds/react/components/alert'
+ import { Alert } from '@trilogy-ds/react/components/Alert'
```

### Added

* Ajout d'un build `commonjs`

### 1.0.0
