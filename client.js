//This should be an apollo client but not gonna import that so
export const client = {
    query: async ({query, variables}) => {		
        const res = await fetch('https://countries.trevorblades.com/', {
					method: 'POST', 
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
					},
					body: JSON.stringify({
						query,
						variables,
					})
				});
				
				return await res.json();
		},
};