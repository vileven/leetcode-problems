/**
 *  finite-state machine (FST) pattern
 *  we will describe states, events and transitions
 *  (which is also known as reducer or redux for frontend engineers)
 */

// all possible states of valid number and ERR
enum States {
	INITIAL,
	SIGNED,
	INTEGER,
	DOT,
	DECIMAL,
	EXP,
	EXP_SIGN,
	EXP_NUMBER,
	ERR,
}

// possible valid inputs or events
enum Events {
	SIGN,
	DIGIT,
	DOT,
	E,
	OTHER,
}

// valid transitions
const TRANSITIONS_MAP = {
	[States.INITIAL]: {
		[Events.SIGN]: States.SIGNED,
		[Events.DIGIT]: States.INTEGER,
		[Events.DOT]: States.DOT,
	},
	[States.SIGNED]: {
		[Events.DIGIT]: States.INTEGER,
		[Events.DOT]: States.DOT,
	},
	[States.INTEGER]: {
		[Events.DIGIT]: States.INTEGER,
		[Events.DOT]: States.DECIMAL,
		[Events.E]: States.EXP,
	},
	[States.DOT]: {
		[Events.DIGIT]: States.DECIMAL,
	},
	[States.DECIMAL]: {
		[Events.DIGIT]: States.DECIMAL,
		[Events.E]: States.EXP,
	},
	[States.EXP]: {
		[Events.SIGN]: States.EXP_SIGN,
		[Events.DIGIT]: States.EXP_NUMBER,
	},
	[States.EXP_SIGN]: {
		[Events.DIGIT]: States.EXP_NUMBER,
	},
	[States.EXP_NUMBER]: {
		[Events.DIGIT]: States.EXP_NUMBER,
	},
} as const;

class FST {
	private state: States;

	constructor() {
		this.state = States.INITIAL;
	}

	public getState(): States {
		return this.state;
	}

	public transit(event: Events): States {
		this.state = TRANSITIONS_MAP[this.state][event] ?? States.ERR;

		return this.state;
	}
}

const ZERO_CODE = '0'.charCodeAt(0);
const NINE_CODE = '9'.charCodeAt(0);
function parseChar(char: string): Events {
	const charCode = char.charCodeAt(0);

	switch (true) {
		case charCode >= ZERO_CODE && charCode <= NINE_CODE:
			return Events.DIGIT;
		case char === '.':
			return Events.DOT;
		case char === 'e' || char === 'E':
			return Events.E;
		case char === '+' || char === '-':
			return Events.SIGN;
		default:
			return Events.OTHER;
	}
}

function isNumber(s: string): boolean {
	const fst = new FST();

	let state = fst.getState();
	for (const char of s) {
		const event = parseChar(char);

		// if invalid input just return false
		if (event === Events.OTHER) {
			return false;
		}

		state = fst.transit(event);
		if (state === States.ERR) {
			return false;
		}
	}

	// only three valid states for end
	return (
		state === States.EXP_NUMBER ||
		state === States.DECIMAL ||
		state === States.INTEGER
	);
}

export default isNumber;
