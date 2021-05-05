# Vue 2 Template

Basic Vue 2 application template, mounted at single HTML document what runs at tiny HTTP-server.

Template based on Webpack.

* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/)
* [PostCSS](https://postcss.org/)
    * [autoprefixer](https://github.com/postcss/autoprefixer)
    * [cssnano](https://github.com/cssnano/cssnano)
* [Husky](https://typicode.github.io/husky/#/)
    * Pre-commit lint
    
## Usage

* Prepare
  ```shell
  $ npm run prepare # install husky
  ```
* Development
  ```shell
  $ npm run watch # build dist at file changes
  $ npm run serve # start http server on port 8080
  ```
* Code quality
  ```shell
  $ npm run lint
  # or
  $ npm run lint-fix
  ```
* Production
  ```shell
  $ npm run build 
  ```
  
Compiled files are available in `public/dist` folder.
