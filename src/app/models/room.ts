import {User} from './user';
import {Message} from './message';


export class Room {
  constructor() {
    this.users = [];
    this.messages = [];
  }

  id?: number;
  name?: string;
  users: User[];
  messages: Message[];

}
