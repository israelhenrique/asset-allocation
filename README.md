# asset-allocation

## Some notes:

This project uses Node.js v6.x.  
You can use [Node Version Manager](https://github.com/creationix/nvm), there is a `.nvmrc` file available in this project

## Commands:

### Setup
```
npm install
```

### Running:
```
npm start
```
or
```
npm run start
```


### Verify lint:
```
npm run lint
```

### Try to auto fix lint:
```
npm run lint:fix
```

### Running tests:
```
npm run test
```

### Continuous testing on file changes:
```
npm run test:watch
```

### Debug tests
```
npm run test:debug
```
It will open a Blink (Chromium DevTools) waiting before tests execution.  
Put a breakpoint on a test file then resume.

Some Blink hot keys (Windows/Linux):
* Search by filename: `Ctrl + P`
* Put breakpoint: `mouse click on line number`
* Step over: `F10`
* Step into: `F11`
