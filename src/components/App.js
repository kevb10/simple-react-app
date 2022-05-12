import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextInput from "./TextInput";
import useGetProductsBySku from "../helpers/getSku";

export default function App() {
	const dontUrl = "https://i.imgflip.com/1b40yd.jpg";
	const params = useParams();
	const history = useHistory();

	const [token, setToken] = useState("");
	const [sku, setSku] = useState(params.sku ?? "");

	const {
		data,
		isLoading,
		isError,
	} = useGetProductsBySku(sku, { enabled: !!sku && !!token }, token);

	useEffect(() => {
		setSku(params.sku ?? "");
	}, [params.sku]);

	const handleGoBackButtonClick = () => {
		history.goBack();
		// window.location.reload();
	}

	return (
		<div>
			Firebase Token: <input value={token} onChange={e => setToken(e.target.value)} />
			<div>
				Look up by SKU: <TextInput sku={sku} onChangeSku={setSku} />
			</div>
			<button onClick={() => window.open(dontUrl, "_blank")}>Don't click me</button>
			<button onClick={handleGoBackButtonClick}>back</button>
			<div>
				{isLoading && <p>Loading...</p>}
				{isError && <p>Error...</p>}
				{!isLoading && !isError && data && (
					<div>
						<h1>{data[0]?.title}</h1>
						<h5>${data[0]?.price}</h5>
						<p>{data[0]?.descriptionHtml}</p>
						<img src={data[0]?.images[0]?.src} />
					</div>
				)}
			</div>
		</div>
	)
};
