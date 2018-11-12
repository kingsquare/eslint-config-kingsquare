# eslint-config-kingsquare

This is the basic eslint config used by kingsquare.

To install and use do the following:

```
yarn add --dev eslint eslint-config-kingsquare prettier
```
also create a .eslintrc.json:
```json
{
  "extends": "kingsquare",
  "env": {
    "browser": true,
    "node": true
  }
}
```

That should do it!
