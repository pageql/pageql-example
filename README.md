# PageQL Example App

This is an example app for [Svelte](https://svelte.dev) apps with [pageql-auth](https://github.com/pageql/pageql-auth) and [pageql-store-table](https://github.com/pageql/pageql-store-table). It explains some functionality of these libraries due to them not having docs yet.

```bash
npx degit pageql/pageql-example my-pageql-app
cd my-pageql-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd my-pageql-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. 
<br/>
Look at `Login.svelte`, it adds login by just putting
```
pageql:authLogin={() => {}}
```
on a form. This calls `doLogin` in `pageql.config.js` and passed a callback (or any property) to it.
<br/>
Open `Dashboard.svelte` and try changing 
```
<input bind:value={$variables.currency} placeholder="Currency" pageql:authRole={"manager"} />
```
to 
```
<input bind:value={$variables.currency} placeholder="Currency" pageql:authRole={"admin"} />
```

Take another look at the properties being passed to the `Table` component in `Dashboard.svelte`. They come from a `data` store being returned by `storeTable`, a custom Svelte store which makes it easy to implement Tables. You can check out just the Table in this [repl](https://svelte.dev/repl/b3f311b1291f4861b4cccf93b8f68bae?version=3.24.1).