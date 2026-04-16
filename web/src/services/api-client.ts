/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function handleResponse<T>(response: Response): Promise<T> {
	const isJson = response.headers.get('content-type')?.includes('application/json');
	const data = isJson ? await response.json() : null;
	if (!response.ok) {
		const errorMessage = data?.message || `Error ${response.status}: ${response.statusText}`;
		throw new Error(errorMessage);
	}
	return data as T;
}

export const api = {
	get: <T>(endpoint: string, options?: RequestInit) =>
		fetch(`${API_URL}${endpoint}`, { ...options, method: 'GET' }).then(res => handleResponse<T>(res)),

	post: <T>(endpoint: string, body: any, options?: RequestInit) =>
		fetch(`${API_URL}${endpoint}`, {
			...options,
			method: 'POST',
			headers: { 'Content-Type': 'application/json', ...options?.headers },
			body: JSON.stringify(body),
		}).then(res => handleResponse<T>(res)),

	put: <T>(endpoint: string, body: any, options?: RequestInit) =>
		fetch(`${API_URL}${endpoint}`, {
			...options,
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', ...options?.headers },
			body: JSON.stringify(body),
		}).then(res => handleResponse<T>(res)),

	patch: <T>(endpoint: string, body: any, options?: RequestInit) =>
		fetch(`${API_URL}${endpoint}`, {
			...options,
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json', ...options?.headers },
			body: JSON.stringify(body),
		}).then(res => handleResponse<T>(res)),

	delete: <T>(endpoint: string, options?: RequestInit) =>
		fetch(`${API_URL}${endpoint}`, { ...options, method: 'DELETE' }).then(res => handleResponse<T>(res))
};