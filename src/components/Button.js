export default function Button({text, onClick}) {
	return (
		<button className="collection-module-button btn thrilling-orange--light" onClick={onClick}>
			{text}
		</button>
	);
}