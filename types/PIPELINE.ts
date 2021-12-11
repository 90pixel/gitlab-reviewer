type PipelineStatus =
  | 'running'
  | 'pending'
  | 'success'
  | 'failed'
  | 'canceled'
  | 'skipped';

export interface Pipeline {
  web_url: string;
  status: PipelineStatus;
}
