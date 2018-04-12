# eslint-import-resolver-directory-named

[`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) resolution plugin for modules named as their container directory.

Config is passed directly to [`eslint-import-resolver-node`](https://www.npmjs.com/package/eslint-import-resolver-node) as options:

```yaml
settings:
  import/resolver:
    @5rabbits/eslint-import-resolver-directory-named:
      extensions:
        # if unset, default is just '.js', but it must be re-added explicitly if set
        - .js
        - .jsx
        - .es6
        - .coffee

      paths:
        # an array of absolute paths which will also be searched
        # think NODE_PATH
        - /usr/local/share/global_modules

      # this is technically for identifying `node_modules` alternate names
      moduleDirectory:
        - node_modules # defaults to 'node_modules', but...
        - bower_components
        - project/src  # can add a path segment here that will act like
                       # a source root, for in-project aliasing (i.e.
                       # `import MyStore from 'stores/my-store'`)
```

or to use the default options:

```yaml
settings:
  import/resolver: @5rabbits/eslint-import-resolver-directory-named
```
