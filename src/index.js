import React, { useState } from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import TextInput from "./components/TextInput";

const App = () => {
	const [token, setToken] = useState("");
	const queryClient = new QueryClient({
		defaultOptions : {
			queries : {
				retry: false,
			},
		},
	});

	return (
	<div style={{ width: "100%" }}>
		<QueryClientProvider client={queryClient}>
			Firebase Token: <input value={token} onChange={e => setToken(e.target.value)}/>
			<div>
				Look up by SKU: <TextInput sku="" token={token} />
			</div>
		</QueryClientProvider>
	</div>
)
};

render(<App />, document.getElementById("root"));
