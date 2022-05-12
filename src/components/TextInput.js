import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import Button from "./Button";

/**
 * Represents a running server validation request.
 */
export default function TextInput({sku, onChangeSku}) {
	const [productSku, setProductSku] = useState(sku);
	const history = useHistory();

	useEffect(()=>{
		setProductSku(sku);
	}, [sku]);

	const handleButtonClick = () => {
		history.push('/sku/' + productSku);
		onChangeSku(productSku);
	};

	return (
	  <>
		<input value={productSku} onChange={e => setProductSku(e.target.value)} />
		<Button text="Search" onClick={() => handleButtonClick()} />
	  </>
	);
  }
