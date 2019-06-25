import Unsplash from './node_modules/unsplash-js';

// Access key
// bc060ee954b31a5ec6ed79b77a1624cc8c001c175f419a05494cac7c8e5076d5
// Secret key
// 1b361cd5cc60a9666be1cfc3ad011ec1e5da70f9739d4f3b32b6c589ca0ef5bc
const API = new Unsplash({
  applicationId: "bc060ee954b31a5ec6ed79b77a1624cc8c001c175f419a05494cac7c8e5076d5",
  secret: "1b361cd5cc60a9666be1cfc3ad011ec1e5da70f9739d4f3b32b6c589ca0ef5bc"
});
export default API;