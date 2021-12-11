import { User } from './USER';
import { Milestone } from './MILESTONE';
import { Pipeline } from './PIPELINE';

type MergeRequestStatus = 'can_be_merged' | 'unchecked';

export interface RequestType {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: MergeRequestStatus;
  merged_by: User;
  merged_at: string | null;
  closed_by: User | null;
  closed_at: string | null;
  created_at: string;
  updated_at: string;
  target_branch: string;
  source_branch: string;
  upvotes: number;
  downvotes: number;
  author: User;
  assignee: User;
  source_project_id: number;
  target_project_id: number;
  labels: string[];
  work_in_progress: boolean;
  milestone: Milestone;
  merge_when_pipeline_succeeds: boolean;
  merge_status: MergeRequestStatus;
  sha: string;
  merge_commit_sha: string | null;
  user_notes_count: number;
  discussion_locked: boolean | null;
  should_remove_source_branch: boolean | null;
  force_remove_source_branch: boolean;
  allow_collaboration: boolean;
  allow_maintainer_to_push: boolean;
  web_url: string;
  time_stats: {
    time_estimate: number;
    total_time_spent: number;
    human_time_estimate: number;
    human_total_time_spent: number;
  };
  squash: boolean;
  approvals_before_merge: number | null;
  pipeline: Pipeline;
}
