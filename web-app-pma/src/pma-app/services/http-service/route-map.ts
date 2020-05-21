
export const BASE = '/api/v1';

export const PROJECTS = C('projects');
export const ISSUES = C('issues');
export const USERS = C('users');
export const COMMENTS = C('comments');


function C(path: string) {
    return BASE.concat(`/${path}`);
}
