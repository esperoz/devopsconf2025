require("vars.js");

// Domains:
D('dso.domain.corp', REG_NONE, DnsProvider(BIND),
    A('@', '10.1.2.3'),
    A('ns1','10.1.2.4'),
    A('ns2','10.1.2.5')
);

// subzones
require("./subzones/poc.js");

// reverse zone
require("./revzones/rev-10-2-2.js");
