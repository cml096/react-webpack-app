# webpack-React

This is a basic setup for a React application without using the create-react-app command.

## Steps to Set up the React Application:

1. **Create a new directory for your project**

```bash
mkdir react-app && cd webpack-react
```

2. **Initialize a new Node.js project**

```bash
npm init -y
```

3. **Install Libraries**

ReactDOM

```bash
npm install react react-dom
```

Babel

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
```

Webpack

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

4. **Configure**

Babel and Webpack

5. **Crete main files**

Html Template `public/index.hml`
React component `src/index.tsx`

6. **Update package.json scripts**

```bash
"scripts": {
  "start": "webpack serve --open --mode development",
  "build": "webpack --mode production"
}

```

### Settings for Typescrite:

1. **Install TypeScript and the TypeScript loader for Webpack**

```bash
npm install --save-dev typescript ts-loader

```

2. **Install TypeScript type definitions for React and ReactDOM**

```bash
npm install --save-dev @types/react @types/react-dom

```

3. **Create a tsconfig.json file**

```bash
npx tsc --init

```

example:

```bash
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ]
}

```

4. **Update the Webpack configuration**

You need to tell Webpack to use ts-loader for .ts and .tsx files and also resolve these file types. Update your webpack.config.js as follows:
