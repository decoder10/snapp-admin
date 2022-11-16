/* eslint-disable @typescript-eslint/no-explicit-any */
import socket from './socket';

export class SocketManager {
  private static rid = 1;

  static isConnected: boolean;

  static isReconnecting = false;

  private static notificationHandler;

  private static callbackMappings = {};

  private static triggeredCallbacks = {};

  static setNotificationHandler(handler: (code: string) => void) {
    this.notificationHandler = handler;
  }

  static initializeConnection(callback?: (connected: boolean) => void) {
    socket.on('connect', () => {
      if (this.isReconnecting) {
        this.socketEmitter('query', {
          header: { action: 'main::reconnect' },
        });

        this.isReconnecting = false;
      }

      this.disconnectChannel();
      callback?.(socket.connected);
    });
  }

  static reconnectChannel(callback?: (connected: boolean) => void) {
    socket.on('reconnect', () => {
      callback(socket.connected);
      this.resetTriggeredCallbacks();
    });
  }

  static disconnectChannel() {
    return socket.on('connect_error', () => {
      this.isReconnecting = true;
    });
  }

  static resetTriggeredCallbacks() {
    this.triggeredCallbacks = {};
  }

  static socketEmitter(channel: string, data?: any, callback?: (res: any) => void) {
    return new Promise<boolean>((resolve, reject) => {
      const id = this.rid++;

      const emitData = {
        header: {
          ...data.header,
          token: localStorage.getItem('token') || '',
          rid: id,
        },
        body: data.body || {},
      };

      this.callbackMappings = {
        ...this.callbackMappings,
        [id]: callback,
      };

      this.triggeredCallbacks = {
        ...this.triggeredCallbacks,
        [id]: false,
      };

      socket.emit(channel, emitData);

      socket.on('response', ({ header, body }) => {
        if (!this.triggeredCallbacks[header.rid]) {
          if (header.status === -1) {
            reject({ code: header.code });
            this.notificationHandler?.(header.code);
          } else {
            resolve(body);
            this.callbackMappings[header.rid]?.(body);

            this.triggeredCallbacks[header.rid] = true;
          }
        } else {
          resolve(true);
        }
      });
    });
  }

  static connectChannel(channel: string, callback: (res: any) => void) {
    return new Promise((resolve, reject) => {
      socket.on(channel, res => {
        resolve(true);
        callback?.(res);
      });
    });
  }
}
