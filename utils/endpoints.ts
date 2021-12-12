/* eslint-disable max-len */

const handleParams = (options: object | undefined) => {
  if (options) {
    const keys = Object.keys(options);
    const vals = Object.values(options);
    const params = keys.map((key, index) => `&${key}=${vals[index]}`);
    return params.join('');
  }
};

interface IRequest {
  reviewer_id?: number;
  sort?: 'asc' | 'desc';
  page?: number;
  per_page?: number;
  updated_after?: string;
  updated_before?: string;
}

// interface IRequestDetail {
//   project_id: number;
//   iid: number;
// }
const endpoints = {
  user: `/user`,

  request: (options?: IRequest) =>
    `/merge_requests?scope=all${handleParams(options)}`,
  myOpenRequests: '/merge_requests?state=opened&scope=assigned_to_me', // Bana açılmış ve açık durumda olan requestler. Headerda kullanmak için var
  // requestDetail: (options?: IRequestDetail) =>
  //   `/projects/${options?.project_id}/merge_requests/${options?.iid}`,
};

export default endpoints;
