/* eslint-disable max-len */
interface IRequest {
  reviewer_id: number;
  sort?: 'asc' | 'desc';
  page: number;
  perPage: number;
  updatedAt: string;
  updatedBefore: string;
}

interface IRequestDetail {
  project_id: number;
  iid: number;
}
const endpoints = {
  user: `/user`,
  request: (options?: IRequest) =>
    '/merge_requests?scope=all&order_by=updated_at&sort=desc&view=simple&page=1&per_page=100&reviewer_id=80&updated_after=2021-11-29T21:00:00.000Z&updated_before=2021-12-31T20:59:59.999Z',
  requestDetail: (options?: IRequestDetail) =>
    `/projects/${options?.project_id}/merge_requests/${options?.iid}`,
};

export default endpoints;
