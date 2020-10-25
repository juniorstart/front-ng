import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';


import {Room} from '../../models/room';
import {User} from '../../models/user';
import {Message} from '../../models/message';
import {SocketService} from '../../services/socket.service';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent
  implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {
  @ViewChild('scroller', {static: false, read: ElementRef }) private scroller: ElementRef;

  selectedRoom: Room = new Room();
  user: string; // id of user at this moment
  rooms: Room[] = [];
  messageContent: string;
  messageListener: any;
  roomsListener: any;
  roomListener: any;
  isSelected = false;

  constructor(private socket: SocketService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.initConnection();
  }

  ngOnDestroy(): void {
    this.socket.leaveRoom(+this.user);
  }

  ngAfterViewInit(): void {
    this.scroll();
  }

  ngAfterViewChecked(): void {
    setInterval(this.scroll, 10);
  }

  scroll = () => {
    try {
      this.scroller.nativeElement.scrollTop = this.scroller.nativeElement.scrollHeight;
    } catch (err) {}
  }

  initConnection = (): void => {
    this.user = this.authService.getUser();

    this.socket.startConnection();


    this.roomsListener = this.socket
      .getRoomsListener()
      .subscribe((response: any) => {
        response.forEach(({ item1, item2 }) => {
          let room = new Room();
          room.id = item1;
          room.name = item2;
          this.rooms.push(room);
        });

      });

    this.messageListener = this.socket
      .getMessageListener()
      .subscribe((message: Message) => {
        this.selectedRoom.messages.push(message);
      });

    this.roomListener = this.socket
      .getRoomListener()
      .subscribe((newRoom: Room) => {
        this.selectedRoom = newRoom;
      });
  }

  onSelect = ({ name, id }) => {
    if (!this.isSelected) {
      this.socket.enterRoom(name, id);
      this.isSelected = true;
    } else {
      this.socket.changeRoom(name, id);
    }
  }

  onSend = (message: string): void => {
    if (!message) {
      return;
    }
    const mess = new Message();
    mess.Sender = this.user.toString();
    mess.Content = message;
    this.socket.sendMessage(mess);
  }
}
