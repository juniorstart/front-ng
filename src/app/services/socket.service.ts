import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Message} from '../models/message';
import {Room} from '../models/room';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private hubConnection: signalR.HubConnection;
  private connectionIsEstablished = false;

  constructor() {
    this.createConnection();
    this.startConnection();
  }

  private createConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl(`${environment.apiUrl}/chat`)
      .build();
  }

  public startConnection = () => {


    this.hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log('Hub connection started');
      })
      .catch(err => console.log(`Error while starting connection: ${err}`));
  }


  public getMessageListener = (): Observable<Message> => {
    return new Observable<Message>(observer => {
      this.hubConnection.on('BroadcastMessage', (data: Message) =>
        observer.next(data)
      );
    });
  }

  public getRoomsListener = (): Observable<any> => {
    return new Observable<any>(observer => {
      this.hubConnection.on('ReceiveRooms', (data: any) => observer.next(data));
    });
  }

  public getRoomListener = (): Observable<Room> => {
    return new Observable<Room>(observer => {
      this.hubConnection.on('ReceiveRoom', (data: Room) => observer.next(data));
    });
  }

  public sendMessage = (message: Message): void => {
    this.hubConnection.invoke('SendMessage', message);
  }

  public changeRoom = (roomName: string, id: number): void => {
    this.hubConnection.invoke('ChangeRoom', roomName, id);
  }

  public enterRoom = (roomName: string, id: number): void => {
    this.hubConnection.invoke('EnterRoom', roomName, id);
  }

  public leaveRoom = (id: number) => {
    this.hubConnection.invoke('LeaveRoom', id);
  }
}
