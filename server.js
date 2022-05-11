let requestDebugCounter = 0;

export default class ServerRequest {
	constructor(value) {
	  this.requestId = `ServerRequest#${++requestDebugCounter}_for_value_'${value}'`;
  
	  this.canceled = false;
	  this.value = value;
	}
  
	verifyValue() {
	  // simulate real server access
	  return new Promise(resolve =>
		window.setTimeout(() => {
		  // Response from server received!
  
		  if (this.canceled) {
			// we're canceled... discard everything
			console.log(
			  `[${this.requestId}] received Response for out-of-date value '${
				this.value
			  }' but has been canceled. Discarding`
			);
  
			return;
		  }
		  console.log(
			`[${this.requestId}] received Response for up-to-date value '${
			  this.value
			}'.`
		  );
		  resolve(this.value === "2022" ? "YES!" : "NO. TRY AGAIN.");
		}, 1500)
	  );
	}
  
	cancel() {
	  console.log(`[${this.requestId}] canceling request`);
	  this.canceled = true;
	}
  }
  