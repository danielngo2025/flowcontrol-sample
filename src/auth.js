/** How long a session token is good for, in milliseconds. */
export const SESSION_TTL_MS = 24 * 3_600_000;

export function isExpired(issuedAt, now = Date.now()) {
  return now - issuedAt > SESSION_TTL_MS;
}
