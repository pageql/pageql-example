<script>
    import Table from "./Table.svelte";
    import { storeTable } from "@pageql/pageql-store-table";
    
    const MYQUERY = `
      query Query($currency: String!){
        countries(filter: {currency: {regex: $currency}}) {
          name
          currency
          states {
            name
          }
        }
      }
    `;
  
  const { data, variables } = storeTable({
    query: MYQUERY,
    variables: {
      currency: "USD",
    },
    usegql: false
  });
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    text-align: center;
  }
</style>

{#await $data then response}
  <h1>{response.tableName}</h1>
  <nav>
    <!-- This is visible because user has the role "manager" set in pageql.config.js, change this to admin to be unable to see this -->
    <input bind:value={$variables.currency} placeholder="Currency" pageql:authRole={"manager"} /> 
    <!---->
    <button type="button" pageql:authLogout={() => {}}>Logout</button>
  </nav>
  <br />
  <Table tableData={response.tableData} tableKeys={response.tableKeys} />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}