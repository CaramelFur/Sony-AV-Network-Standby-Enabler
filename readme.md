# Sony AV Network Standby Enabler

This is a simple tool to enable the network standby feature of Sony AV receivers that officially do not support it.

For some reason the European models of many Sony AV receivers do not support the network standby feature, even though the hardware is capable of it. This tool enables the network standby feature on these models. So far it has only been tested on the following models:

- STR-DN860 / STR-DN1060

If you find that it works successfully on other models, please let me know so I can update this list.

## Usage

1. Make sure your receiver is on and connected to your network.
2. Clone this repository or download the ZIP file and extract it.
3. Execute one of the following commands in the extracted directory:
    - `node index.js $RECEIVER_IP`
    - `npm start $RECEIVER_IP`
    - `yarn start $RECEIVER_IP`
    - `pnpm start $RECEIVER_IP`
4. The tool will attempt to enable the network standby feature on the receiver.
5. If successful, the program will tell you. And you can now use the following features while the receiver is in standby:
    - Google Cast
    - Spotify Connect
    - AirPlay
