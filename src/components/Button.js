export default function Button({text, onClick}) {
	return (
		<button className="btn thrilling-orange" onClick={onClick}>
			{text}
		</button>
	);
}