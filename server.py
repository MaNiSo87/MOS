#!/usr/bin/env python3
"""Static dev server for the MOS site — sends no-cache headers so the
preview always shows the latest files (no stale browser cache)."""
import functools
import http.server

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == "__main__":
    handler = functools.partial(NoCacheHandler, directory="/home/user/MOS")
    http.server.ThreadingHTTPServer(("0.0.0.0", 8000), handler).serve_forever()
