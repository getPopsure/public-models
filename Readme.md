# Public Models

Collection of public models and utilities used at [Popsure](https://getpopsure.com)

## Contributing

### Updating universities

You can update the universities file by running

```bash
node scripts/parseUniversities.js '<path to file>'
```

### Releasing a new version

1. Go to the **Releases** section on GitHub and click on **Draft a new release**
2. On the **Choose a tag** dropdown, write down a new tag and click on **Create new tag on publish**. We
   use [Semantic Versioning](https://semver.org) for versioning.
3. Write down some release notes containing "what's updated", "breaking change" (if any) and "Migration from previous
   version" (if any)
4. Click on **Publish release**

GitHub Action will then automatically pick it up from there and release the new version for you.
