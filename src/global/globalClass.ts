export class ResponsiveData<D> {
  data: D | D[];
  status: number;
  messages: string;

  constructor(data: D | D[], status: number, messages: string) {
    this.data = data;
    this.status = status;
    this.messages = messages;

    return this;
  }
}
