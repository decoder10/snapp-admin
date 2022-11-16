import io from 'socket.io-client';

const { REACT_APP_HTTP_PROTO: wsProto, REACT_APP_WS_HOST: wsHost, REACT_APP_HTTP_PORT: wsPort } = process.env;

export default io(`${wsProto}://${wsHost}:${wsPort}`, { transports: ['websocket', 'polling'] });
