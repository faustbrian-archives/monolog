export interface ILogger {
	/**
	 * System is unusable.
	 */
	emergency<T = any>(message: string, context?: T): void;

	/**
	 * Action must be taken immediately.
	 */
	alert<T = any>(message: string, context?: T): void;

	/**
	 * Critical conditions.
	 */
	critical<T = any>(message: string, context?: T): void;

	/**
	 * Runtime errors that do not require immediate action but should typically
	 * be logged and monitored.
	 */
	error<T = any>(message: string, context?: T): void;

	/**
	 * Exceptional occurrences that are not errors.
	 */
	warning<T = any>(message: string, context?: T): void;

	/**
	 * Normal but significant events.
	 */
	notice<T = any>(message: string, context?: T): void;

	/**
	 * Interesting events.
	 */
	info<T = any>(message: string, context?: T): void;

	/**
	 * Detailed debug information.
	 */
	debug<T = any>(message: string, context?: T): void;

	/**
	 * Logs with an arbitrary level.
	 */
	log<T = any>(level: string, message: string, context?: T): void;
}
