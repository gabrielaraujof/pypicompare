export class PypiPackage implements Package {
  info: PackageInfo;
  releases: any;

  constructor(input: Package) {
    // TODO add validation of json
    this.info = input.info;
    this.releases = input.releases;
  }

  get releasesArray(): Array<any> {
    return Object.keys(this.releases).map((version) => this.releases[version]);
  }
}

interface Package {
  info: PackageInfo;
  // Releases and URLS will be further added.
  releases: any;
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
