export interface IUpdateTrail {
  _id: string;
  description: string;
  video_description: string;
  name: string;
  references: string;
  subtitle: string;
  video_title: string;
  iframe_references?: string;
}

export interface ICreateTrail {
  description: string;
  video_description: string;
  name: string;
  references: string;
  subtitle: string;
  video_title: string;
  iframe_references: string;
}

export interface IGetTrail {
  data: IUpdateTrail;
}
