# Public Models

Collection of public models and utilities used at [Popsure](https://getpopsure.com)

## Contributing

### Updating universities

You can update the universities file by running 

```bash
node scripts/parseUniversities.js '<path to file>'
```

### Releasing a new version

1. Create a tag with the correct version number that follow the [Semantic Versioning](https://semver.org) standard (e.g. `git tag v27.0.0)
2. Use the "Draft a new release" on GitHub and write down some release notes containing "what's updated", "breaking change" (if any) and "Migration from previous version" (if any)

GitHub Action will then automatically pick it up from there and release the new version for you.
