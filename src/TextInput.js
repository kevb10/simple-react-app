import useChangeHandler from "./handler";

/**
 * Represents a running server validation request.
 */
export default function TextInput({ placeholder = ""}) {
	const [state, setState, verificationState] = useChangeHandler(placeholder);
  
	return (
	  <>
		<input value={state} onChange={e => setState(e)} />
		{verificationState && (
		  <div>
			Server returned: <b>{verificationState.message}</b> (response coming
			from server request <code>{verificationState.requestId}</code>)
		  </div>
		)}
	  </>
	);
  }