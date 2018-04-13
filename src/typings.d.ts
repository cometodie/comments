/* SystemJS module definition */
declare var module: NodeModule;
declare module 'laravel-echo';
declare module 'socket.io-client';
interface NodeModule {
  id: string;
}
