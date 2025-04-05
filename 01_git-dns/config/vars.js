var REG_NONE = NewRegistrar('none', 'NONE');    // No registrar.

// define BIND provider with SOA
var BIND = NewDnsProvider('bind', 'BIND', {
        'default_soa': {
        'master': 'ns1.dso.domain.corp.',
        'mbox': 'adminemail.domain.corp.',
        'refresh': 300,
        'retry': 60,
        'expire': 604800,
        'minttl': 60,
    },
    'default_ns': [
        'ns1.dso.domain.corp.',
        'ns2.dso.domain.corp.'
    ]
})
