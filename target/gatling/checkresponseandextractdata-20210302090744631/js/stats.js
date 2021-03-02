var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5947",
        "ok": "5947",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3139",
        "ok": "3139",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2808",
        "ok": "2808",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3139",
        "ok": "3139",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4543",
        "ok": "4543",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5666",
        "ok": "5666",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5891",
        "ok": "5891",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.286",
        "ok": "0.286",
        "ko": "-"
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
        "total": "5947",
        "ok": "5947",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5947",
        "ok": "5947",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5947",
        "ok": "5947",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5947",
        "ok": "5947",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5947",
        "ok": "5947",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5947",
        "ok": "5947",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5947",
        "ok": "5947",
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
        "total": "0.143",
        "ok": "0.143",
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
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles2": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles3": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles4": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.143",
        "ok": "0.143",
        "ko": "-"
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
