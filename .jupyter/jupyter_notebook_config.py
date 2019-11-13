c.ServerProxy.servers = {
  'DirectoryBrowser': {
    'command': ['python3', '-m', 'http.server', '{port}'],
    'absolute_url': False
  },
  'Flask': {
    'command': ['flask', 'run', '--port', '{port}'],
    'absolute_url': False
  }
}
