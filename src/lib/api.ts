const ADMIN_ORIGIN = import.meta.env.VITE_ADMIN_ORIGIN as string | undefined;

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function postToAdmin<T>(path: string, data: unknown): Promise<T> {
  if (!ADMIN_ORIGIN) {
    throw new ApiError(500, 'VITE_ADMIN_ORIGIN is not configured');
  }

  const res = await fetch(`${ADMIN_ORIGIN}/api${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const isJson = res.headers.get('content-type')?.includes('application/json');
  const body = isJson ? await res.json() : undefined;

  if (!res.ok) {
    throw new ApiError(res.status, body?.error ?? `Request failed with status ${res.status}`);
  }

  return body as T;
}

export function adminUrl(path: string): string {
  return `${ADMIN_ORIGIN ?? ''}${path}`;
}
