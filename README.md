# Example of nyc v14 bug: no coverage information with default settings on a typescript project.

To reproduce the issue:

```shell
$ npm install
$ npm run build
$ npm run test
```

Note there is coverage information output.

Now, change in package.json:

```json
  "exclude-after-remap": true
```

Then rerun test:

```shell
$ npm run test
```

Now the output includes no coverage information.

There are no explicit excludes added, and all of the default excludes should not exclude the file `index.ts`.

This problem is an issue because nyc@13 set exclude-after-remap to false by default, and in nyc@14 it turned to true by default. So projects like this one suddenly stopped getting coverage information.
