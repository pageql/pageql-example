<script>
  import Dashboard from "./Dashboard.svelte";
  import Login from "./Login.svelte";

  /* PageQL BoilerPlate*/
  import pageqlConfig from "../pageql.config.js";
  import { writable } from "svelte/store";

  window.pageql = {};
  window.pageql.authState = writable({ loggedIn: false });
  window.pageql.auth = pageqlConfig.auth;
  window.pageql.user = {};
  window.pageql.client = pageqlConfig.client;

  const authState = window.pageql.authState;
  /* PageQL BoilerPlate*/
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  {#if $authState.loggedIn}
    <Dashboard />
  {:else}
    <Login />
  {/if}
</main>
