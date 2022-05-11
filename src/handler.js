import { useState, useEffect } from "react";
import ServerRequest from "./server";

export default function useChangeHandler(initialValue) {
	const [state, setState] = useState(initialValue);
	const [verificationState, setVerificationState] = useState(null);
  
	useEffect(() => {
	  console.log(
		`useServiceVerification. Create new ServerRequest for '${state}'`
	  );
  
	  // remove old state
	  setVerificationState(null);
  
	  const request = new ServerRequest(state);
	  request.verifyValue().then(response =>
		setVerificationState({
		  message: response,
		  requestId: request.requestId
		})
	  );
  
	  //
	  return function() {
		console.log("useEffect CANCEL REQUEST " + request.requestId);
		request.cancel();
	  };
	}, [state]);
  
	return [state, e => setState(e.target.value), verificationState];
  }