var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "314",
        "ok": "7973",
        "ko": "314"
    },
    "maxResponseTime": {
        "total": "7973",
        "ok": "7973",
        "ko": "314"
    },
    "meanResponseTime": {
        "total": "4144",
        "ok": "7973",
        "ko": "314"
    },
    "standardDeviation": {
        "total": "3830",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4144",
        "ok": "7973",
        "ko": "314"
    },
    "percentiles2": {
        "total": "6058",
        "ok": "7973",
        "ko": "314"
    },
    "percentiles3": {
        "total": "7590",
        "ok": "7973",
        "ko": "314"
    },
    "percentiles4": {
        "total": "7896",
        "ok": "7973",
        "ko": "314"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.222",
        "ok": "0.111",
        "ko": "0.111"
    }
},
contents: {
"req_get-all-user-8d38f": {
        type: "REQUEST",
        name: "Get all user",
path: "Get all user",
pathFormatted: "req_get-all-user-8d38f",
stats: {
    "name": "Get all user",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "7973",
        "ok": "7973",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7973",
        "ok": "7973",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7973",
        "ok": "7973",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7973",
        "ok": "7973",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7973",
        "ok": "7973",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7973",
        "ok": "7973",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7973",
        "ok": "7973",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "0.111",
        "ko": "-"
    }
}
    },"req_get-specific-us-9823c": {
        type: "REQUEST",
        name: "Get Specific User",
path: "Get Specific User",
pathFormatted: "req_get-specific-us-9823c",
stats: {
    "name": "Get Specific User",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "314",
        "ok": "-",
        "ko": "314"
    },
    "maxResponseTime": {
        "total": "314",
        "ok": "-",
        "ko": "314"
    },
    "meanResponseTime": {
        "total": "314",
        "ok": "-",
        "ko": "314"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "314",
        "ok": "-",
        "ko": "314"
    },
    "percentiles2": {
        "total": "314",
        "ok": "-",
        "ko": "314"
    },
    "percentiles3": {
        "total": "314",
        "ok": "-",
        "ko": "314"
    },
    "percentiles4": {
        "total": "314",
        "ok": "-",
        "ko": "314"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "-",
        "ko": "0.111"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
