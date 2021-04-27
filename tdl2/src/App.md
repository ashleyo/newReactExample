## Context

The 'rows' object, RO,  is live and remains linked to the sheet until released

### TODO

Rename throughout to make this clear

### TODO :heavy_check_mark:

Test to see which, if any, mutations break this link. Is `map` safe, for instance? That returns a new array so one would expect NO.

NO is correct, map breaks it.

## Decision

1. Write a shim to convert RO to POO and vice-versa.
	+ react bits might be simpler/more-or-less the same
	- need to arrange for the shim to be activated on updates
	- ids of tasks might change? 

2. Make the React bits work directly with RO
	+ Safer
	- Needs major code rethinks



