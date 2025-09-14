export type TEvent = {
  id: number;
  name: string;
  description?: string;
  location?: string;
  image?: string;
  startTime: Date;
  endTime?: Date;
  clubId: number;
};
