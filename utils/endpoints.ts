/* eslint-disable max-len */

type IRequest = {
  reviewer_id?: string;
  page?: string;
  per_page?: string;
  sort?: 'asc' | 'desc';
  updated_after?: string;
  updated_before?: string;
};

const handleParams = (options: IRequest | undefined): string => {
  return new URLSearchParams(options).toString();
};

const endpoints = {
  user: `/user`,
  users: `/users?active=true&per_page=2000`, // tüm kullanıcıları çekmek için per_page'i kendimiz veriyoruz ve aktif olanları çekmek için de o durumu isteğe ekliyoruz.
  request: (options?: IRequest) =>
    `/merge_requests?scope=all&${handleParams(options)}`,
  myOpenRequests: '/merge_requests?state=opened&scope=assigned_to_me', // Bana açılmış ve açık durumda olan requestler. Headerda kullanmak için var
  // requestDetail: (options?: IRequestDetail) =>
  //   `/projects/${options?.project_id}/merge_requests/${options?.iid}`,
  // members: 'groups/:id/members',
};

export default endpoints;
