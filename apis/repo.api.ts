import { AxiosError, HttpStatusCode } from 'axios';
import { axiosInstance } from '@/apis/base.api';
import { GitHubRepo } from '@/types/github-api';
import { mapSourceToDest } from '@/utils/mapper';

type Owner = {
  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
};

type License = {
  key: string;
  name: string;
  spdxId: string;
  url: string;
  nodeId: string;
};

type Permissions = {
  admin: boolean;
  maintain: boolean;
  push: boolean;
  triage: boolean;
  pull: boolean;
};

export type Repo = {
  id: number;
  nodeId: string;
  name: string;
  fullName: string;
  private: boolean;
  owner: Owner;
  htmlUrl: string;
  description: string;
  fork: boolean;
  url: string;
  forksUrl: string;
  keysUrl: string;
  collaboratorsUrl: string;
  teamsUrl: string;
  hooksUrl: string;
  issueEventsUrl: string;
  eventsUrl: string;
  assigneesUrl: string;
  branchesUrl: string;
  tagsUrl: string;
  blobsUrl: string;
  gitTagsUrl: string;
  gitRefsUrl: string;
  treesUrl: string;
  statusesUrl: string;
  languagesUrl: string;
  stargazersUrl: string;
  contributorsUrl: string;
  subscribersUrl: string;
  subscriptionUrl: string;
  commitsUrl: string;
  gitCommitsUrl: string;
  commentsUrl: string;
  issueCommentUrl: string;
  contentsUrl: string;
  compareUrl: string;
  mergesUrl: string;
  archiveUrl: string;
  downloadsUrl: string;
  issuesUrl: string;
  pullsUrl: string;
  milestonesUrl: string;
  notificationsUrl: string;
  labelsUrl: string;
  releasesUrl: string;
  deploymentsUrl: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  gitUrl: string;
  sshUrl: string;
  cloneUrl: string;
  svnUrl: string;
  homepage: string;
  size: number;
  stargazersCount: number;
  watchersCount: number;
  language: string;
  hasIssues: boolean;
  hasProjects: boolean;
  hasDownloads: boolean;
  hasWiki: boolean;
  hasPages: boolean;
  hasDiscussions: boolean;
  forksCount: number;
  mirrorUrl?: string;
  archived: boolean;
  disabled: boolean;
  openIssuesCount: number;
  license: License;
  allowForking: boolean;
  isTemplate: boolean;
  webCommitSignoffRequired: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  openIssues: number;
  watchers: number;
  defaultBranch: string;
  permissions: Permissions;
};

export const getUserRepos = async () => {
  try {
    const response = await axiosInstance.get<GitHubRepo[]>('/user/repos');

    if (response.status === HttpStatusCode.Ok) {
      const repos = response.data;

      return repos.map((repo) =>
        mapSourceToDest<typeof repo, Repo>(repo, {
          id: 'id',
          node_id: 'nodeId',
          name: 'name',
          full_name: 'fullName',
          private: 'private',
          owner: {
            login: 'owner.login',
            id: 'owner.id',
            node_id: 'owner.nodeId',
            avatar_url: 'owner.avatarUrl',
            gravatar_id: 'owner.gravatarId',
            url: 'owner.url',
            html_url: 'owner.htmlUrl',
            followers_url: 'owner.followersUrl',
            following_url: 'owner.followingUrl',
            gists_url: 'owner.gistsUrl',
            starred_url: 'owner.starredUrl',
            subscriptions_url: 'owner.subscriptionsUrl',
            organizations_url: 'owner.organizationsUrl',
            repos_url: 'owner.reposUrl',
            events_url: 'owner.eventsUrl',
            received_events_url: 'owner.receivedEventsUrl',
            type: 'owner.type',
            site_admin: 'owner.siteAdmin'
          },
          html_url: 'htmlUrl',
          description: 'description',
          fork: 'fork',
          url: 'url',
          forks_url: 'forksUrl',
          keys_url: 'keysUrl',
          collaborators_url: 'collaboratorsUrl',
          teams_url: 'teamsUrl',
          hooks_url: 'hooksUrl',
          issue_events_url: 'issueEventsUrl',
          events_url: 'eventsUrl',
          assignees_url: 'assigneesUrl',
          branches_url: 'branchesUrl',
          tags_url: 'tagsUrl',
          blobs_url: 'blobsUrl',
          git_tags_url: 'gitTagsUrl',
          git_refs_url: 'gitRefsUrl',
          trees_url: 'treesUrl',
          statuses_url: 'statusesUrl',
          languages_url: 'languagesUrl',
          stargazers_url: 'stargazersUrl',
          contributors_url: 'contributorsUrl',
          subscribers_url: 'subscribersUrl',
          subscription_url: 'subscriptionUrl',
          commits_url: 'commitsUrl',
          git_commits_url: 'gitCommitsUrl',
          comments_url: 'commentsUrl',
          issue_comment_url: 'issueCommentUrl',
          contents_url: 'contentsUrl',
          compare_url: 'compareUrl',
          merges_url: 'mergesUrl',
          archive_url: 'archiveUrl',
          downloads_url: 'downloadsUrl',
          issues_url: 'issuesUrl',
          pulls_url: 'pullsUrl',
          milestones_url: 'milestonesUrl',
          notifications_url: 'notificationsUrl',
          labels_url: 'labelsUrl',
          releases_url: 'releasesUrl',
          deployments_url: 'deploymentsUrl',
          created_at: 'createdAt',
          updated_at: 'updatedAt',
          pushed_at: 'pushedAt',
          git_url: 'gitUrl',
          ssh_url: 'sshUrl',
          clone_url: 'cloneUrl',
          svn_url: 'svnUrl',
          homepage: 'homepage',
          size: 'size',
          stargazers_count: 'stargazersCount',
          watchers_count: 'watchersCount',
          language: 'language',
          has_issues: 'hasIssues',
          has_projects: 'hasProjects',
          has_downloads: 'hasDownloads',
          has_wiki: 'hasWiki',
          has_pages: 'hasPages',
          has_discussions: 'hasDiscussions',
          forks_count: 'forksCount',
          mirror_url: 'mirrorUrl',
          archived: 'archived',
          disabled: 'disabled',
          open_issues_count: 'openIssuesCount',
          license: {
            key: 'license.key',
            name: 'license.name',
            spdx_id: 'license.spdxId',
            url: 'license.url',
            node_id: 'license.nodeId'
          },
          allow_forking: 'allowForking',
          is_template: 'isTemplate',
          web_commit_signoff_required: 'webCommitSignoffRequired',
          topics: 'topics',
          visibility: 'visibility',
          forks: 'forks',
          open_issues: 'openIssues',
          watchers: 'watchers',
          default_branch: 'defaultBranch',
          permissions: {
            admin: 'permissions.admin',
            maintain: 'permissions.maintain',
            push: 'permissions.push',
            triage: 'permissions.triage',
            pull: 'permissions.pull'
          }
        })
      );
    }

    return [];
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
  }
};
