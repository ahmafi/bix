import fetchJSON from 'common/lib/fetch-json';
import type { LoginReq, LoginRes } from '../ts/types/login';

type FetchResult =
  | { success: true; value: LoginRes }
  | { success: false; error: unknown };

export async function login(loginData: LoginReq): Promise<FetchResult> {
  try {
    const body = await fetchJSON<LoginRes>('/api/login', loginData, {
      method: 'POST',
    });
    return {
      success: true,
      value: body,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
