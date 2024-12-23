type GitHubStatus = "completed";
type GithubConclusion = "failure" | "success";
type GitHubVisibility = "public" | "private";

export type GitHubError = {
  message: string;
  documentation_url: string;
  status: number;
};

export type GitHubRepository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GitHubUser;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url?: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: GitHubLicense | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: GitHubVisibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: GitHubPermissions;
};

export type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  plan: GitHubUserPlan;
};

export type GitHubUserPlan = {
  name: string;
  space: number;
  private_repos: number;
  collaborators: number;
};

export type GitHubLicense = {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
};

export type GitHubPermissions = {
  admin: boolean;
  maintain: boolean;
  push: boolean;
  triage: boolean;
  pull: boolean;
};

export type GitHubWorkflowList = {
  total_count: number;
  workflows: GitHubWorkflow[];
};

export type GitHubWorkflow = {
  id: number;
  node_id: string;
  name: string;
  path: string;
  state: string;
  created_at: string;
  updated_at: string;
  url: string;
  html_url: string;
  badge_url: string;
};

export type GitHubWorkflowRunList = {
  total_count: number;
  workflow_runs: GitHubWorkflowRun[];
};

export type GitHubWorkflowRun = {
  id: number;
  name: string;
  node_id: string;
  head_branch: string;
  head_sha: string;
  path: string;
  display_title: string;
  run_number: number;
  event: string;
  status: GitHubStatus;
  conclusion: GithubConclusion;
  workflow_id: number;
  check_suite_id: number;
  check_suite_node_id: string;
  url: string;
  html_url: string;
  pull_requests: unknown[];
  created_at: string;
  updated_at: string;
  actor: GitHubUser;
  run_attempt: number;
  referenced_workflows: unknown[];
  run_started_at: string;
  triggering_actor: GitHubUser;
  jobs_url: string;
  logs_url: string;
  check_suite_url: string;
  artifacts_url: string;
  cancel_url: string;
  rerun_url: string;
  previous_attempt_url: string | null;
  workflow_url: string;
  head_commit: GitHubCommit;
  repository: GitHubRepository;
  head_repository: GitHubRepository;
};

export type GitHubCommit = {
  id: string;
  tree_id: string;
  message: string;
  timestamp: string;
  author: {
    name: string;
    email: string;
  };
  committer: {
    name: string;
    email: string;
  };
};

export type GitHubWorkflowRunJobList = {
  total_count: number;
  jobs: GitHubWorkflowRunJob[];
};

export type GitHubWorkflowRunJob = {
  id: number;
  run_id: number;
  workflow_name: string;
  head_branch: string;
  run_url: string;
  run_attempt: number;
  node_id: string;
  head_sha: string;
  url: string;
  html_url: string;
  status: GitHubStatus;
  conclusion: GithubConclusion;
  created_at: string;
  started_at: string;
  completed_at: string;
  name: string;
  steps: GitHubWorkflowRunJobStep[];
  check_run_url: string;
  labels: string[];
  runner_id: number;
  runner_name: string;
  runner_group_id: number;
  runner_group_name: string;
};

export type GitHubWorkflowRunJobStep = {
  name: string;
  status: string;
  conclusion: GithubConclusion;
  number: number;
  started_at: string;
  completed_at: string;
};
