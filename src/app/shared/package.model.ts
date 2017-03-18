export interface PypiPackage {
  info: PackageInfo;

  // Releases and URLS will be further added.
  // releases: Array<Array<Url>>;
  // urls: Array<Url>
}

interface PackageInfo {
  name: string;
  summary: string;
  description: string;
  home_page: string;

  author: string;
  author_email: string;

  maintainer: string;
  maintainer_email: string;

  license: string;
  version: string;
  release_url: string;
  package_url: string;

  downloads: PackageDownloads;

  keywords: string;
  classifiers: Array<string>;

  platform: string;
  requires_python: string;
  docs_url: string;
  download_url: string;
}

interface PackageDownloads {
  last_month: number;
  last_week: number;
  last_day: number;
}
