import { useEffect, useState } from "react";
import useGetProductsBySku from "../helpers/getSku";

/**
 * Represents a running server validation request.
 */
export default function TextInput({sku, token}) {
	const [productSku, setProductSku] = useState(sku);
	const [doSearch, setDoSearch] = useState(false);

	const {
		data,
		isLoading,
		isError,
	} =	useGetProductsBySku(productSku, { enabled: doSearch }, token);

	useEffect(() => {
		if (doSearch) {
			setDoSearch(false);
		}	
	}, [doSearch]);

	return (
	  <>
		<input value={productSku} onChange={e => setProductSku(e.target.value)} />
		<button onClick={() => setDoSearch(true)} >Search</button>
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
	  </>
	);
  }