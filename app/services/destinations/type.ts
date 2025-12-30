interface Section {
  id: number;
  title: string;
  description: string;
  url: string;
}
export interface IDestination {
  id?: number;
  code: string;
  name: string;
  title: string;
  bannerUrl: string;
  thumbnailUrl: string;
  sections: Section[];
  createdAt: string;
  updatedAt: string;
  description: string;
}
