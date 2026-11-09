# Quiz du Club Informatique

Ce projet consiste à créer un quiz interactif avec JavaScript.
Il permet de poser des questions, calculer le score et afficher le résultat du joueur.

## 1. Quand utiliser let, const et pourquoi éviter var ?

- `let` : on l'utilise lorsqu'on veut déclarer une variable dont la valeur peut changer.
- `const` : on l'utilise lorsqu'on veut déclarer une variable dont la valeur ne sera pas réaffectée.
- `var` : on évite de l'utiliser car sa portée est moins claire et il peut provoquer des erreurs. On préfère `let` et `const`.

## 2. Quelle est la différence entre == et === ?

- `==` compare les valeurs en autorisant la conversion automatique des types.
- `===` compare les valeurs et les types sans conversion automatique.

**Exemple :**

```javascript
5 == "5"   // true
5 === "5"  // false
```

Avec `==`, JavaScript convertit la chaîne `"5"` en nombre.
Avec `===`, les types sont différents (`number` et `string`), donc le résultat est `false`.