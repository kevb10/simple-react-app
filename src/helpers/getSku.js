import { useQuery } from "react-query";
import { get } from "./client";

export default function useGetProductsBySku(sku, options, token) {
	return useQuery(['products', { sku }], () => get('products', { sku }, token), options);
}
