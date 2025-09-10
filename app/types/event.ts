export type TEvent = {
  id: number;
  name: string;
  description: string;
  location: string;
  startTime: Date;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
  endTime?: Date;
};
