const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
  ac.grant("basic")
    .readOwn("profile")
    .updateOwn("profile")
    .updateAny("content")

  ac.grant("supervisor")
    .extend("basic")
    .readAny("profile")

    ac.grant("admin")
    .extend("supervisor")
    .updateAny("profile")
    .deleteAny("profile")

    ac.grant("multibrand_admin")
    .extend("admin")
    .updateAny("profile")
    .deleteAny("profile")
    .readAny("multibrand")

  ac.grant("superadmin")
    .extend("admin")
    .deleteAny("admins")

  return ac;
})();
