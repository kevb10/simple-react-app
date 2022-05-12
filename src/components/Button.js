export default function Button({text, onClick}) {
	return (
		<button className="btn thrilling-primary" onClick={onClick}>
			{text}
		</button>
	);
}