// Lightweight Hash/History Client-Side Router
export class Router {
  constructor(routes, onNotFound) {
    this.routes = routes;
    this.onNotFound = onNotFound;
    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('DOMContentLoaded', () => this.resolve());
  }

  navigate(path) {
    window.location.hash = path;
  }

  resolve() {
    const rawHash = window.location.hash.replace(/^#/, '') || '/';
    for (const route of this.routes) {
      const match = rawHash.match(route.pattern);
      if (match) {
        route.handler(match.slice(1));
        return;
      }
    }
    this.onNotFound();
  }
}
