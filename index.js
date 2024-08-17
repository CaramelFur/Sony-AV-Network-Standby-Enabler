const ipregex = /(\d{1,3}\.){3}\d{1,3}/;

async function main() {
  // Get first argument, and make sure its an ip
  const ip = process.argv[2];
  if (!ip) {
    console.error('Please provide an IP address');
    process.exit(1);
  }

  if (!ip.match(ipregex)) {
    console.error('Please provide a valid IP address');
    process.exit(1);
  }

  console.log('Connecting to', ip);

  const url = `http://${ip}/cgi-bin/request.fcgi`;
  const body = {
    type: 'http_set',
    packet: [{ id: 1, feature: 'network.standby', value: 'on' }],
  };

  const respose = await fetch(url, {
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
    method: 'POST',
  });

  if (!respose.ok) {
    console.error('Failed to enable network standby');
    process.exit(1);
  }

  const result = await respose.json();
  if (result && result.packet && result.packet[0] && result.packet[0].value === 'ACK') {
    console.log('Network standby succesfully enabled!');
  } else {
    console.error('Failed to enable network standby');
    process.exit(1);
  }
}

main();
