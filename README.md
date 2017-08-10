# eslint-config-kingsquare

This is the basic eslint config used by kingsquare.

To install and use do the following:

```
yarn add --dev eslint eslint-config-kingsquare
```
afterwards install the missing peerDependencies as required. (at time of writing something like `yarn add --dev eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-import@^2.7.0 eslint-plugin-react@^7.1.0`)

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
