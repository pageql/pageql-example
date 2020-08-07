<script>
  export let tableData;
  export let tableKeys;
</script>

<style>
  table {
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    vertical-align: top;
    padding: 9px;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #ff3e00;
    color: white;
    text-align: left;
  }
</style>

<table>
  <thead>
    <tr>
      {#if tableKeys}
        {#each tableKeys as key}
          <th>{key}</th>
        {/each}
      {/if}
    </tr>
  </thead>
  <tbody>
    {#if tableData}
      {#each tableData as entry}
        <tr>
          {#each tableKeys as key}
            {#if Array.isArray(entry[key]) && entry[key][0]}
              <svelte:self
                tableKeys={Object.keys(entry[key][0])}
                tableData={entry[key]} />
            {:else}
              <td>{entry[key]}</td>
            {/if}
          {/each}
        </tr>
      {/each}
    {/if}
  </tbody>
</table>
