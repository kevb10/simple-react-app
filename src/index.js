import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import './style.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

render(
	<BrowserRouter>
		<Route path={["/sku/:sku", "/"]}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Route>
	</BrowserRouter>
	, document.getElementById("root"));
