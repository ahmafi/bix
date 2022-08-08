import { getItem, setItem } from 'common/lib/storage';
import type { StorageResult } from 'common/ts/types/storage-result';

const LOGIN_TOKEN_KEY = 'login_token';

export function getLoginToken(): StorageResult {
  return getItem(LOGIN_TOKEN_KEY);
}

export function setLoginToken(token: string): StorageResult {
  return setItem(LOGIN_TOKEN_KEY, token);
}
