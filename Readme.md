## Preview

Tabler is fully responsive and compatible with all modern browsers. Thanks to its modern, user-friendly design you can create a fully functional interface that users will love! Choose the layouts and components you need and customize them to make your design consistent and eye-catching. Every component has been created with attention to detail to make your interface beautiful! <a href="https://preview.tabler.io">Show me demo</a>

<a href="https://preview.tabler.io" target="_blank"><img src="https://raw.githubusercontent.com/tabler/tabler/dev/src/static/tabler-preview.png" alt="Tabler preview"></a>

## Features

We've created this admin panel for everyone who wants to create templates based on our pre-made components. Our mission is to deliver a user-friendly, clear and easy administration panel that can be used by both simple websites and sophisticated systems. The only requirement is basic HTML and CSS (and some [Liquid](https://github.com/Shopify/liquid/wiki)) knowledge — as a reward, you'll be able to manage and visualise different types of data in the easiest possible way!

* **Responsive:** With the support for mobile, tablet and desktop displays, it doesn’t matter what device you’re using. Tabler is responsive in all major browsers.
* **Cross Browser:** Our theme works perfectly with the latest Chrome, Firefox+, latest Safari, Opera, Edge and mobile browsers. We work hard to to provide continuous support for them.
* **HTML5 & CSS3:** We use only modern web technologies, such as HTML5 and CSS3. Our theme includes some subtle CSS3 animations, which will help you attract attention.
* **Clean Code:** We followed Bootstrap’s guidelines carefully to make your integration as easy as possible. All code is handwritten and W3C valid.
* **Demo pages**: Tabler features over 20 individual pages using various components, which gives you the freedom to choose and combine. All components can vary in color and styling that you can easily modify using Sass. Sky is the limit!
* **Single Page Application versions:** [Tabler React](https://github.com/tabler/tabler-react) has React components for Tabler.

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
