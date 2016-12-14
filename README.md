less-plugin-to-crlf
===

`lessc` outputs LF ending files by default. This plugin replaces the LF endings with CRLF endings.

## lessc usage

Install the plugin to the same level of less
```
npm install --less-plugin-to-crlf
```

or if install less globally,
```
npm install -g --less-plugin-to-crlf
```

Once install, you can use it with option `--to-crlf` on command line. For example.
```
lessc --to-crlf 
```
