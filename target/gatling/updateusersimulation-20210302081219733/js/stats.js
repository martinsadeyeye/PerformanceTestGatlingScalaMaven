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
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4769",
        "ok": "4769",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2651",
        "ok": "2651",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2118",
        "ok": "2118",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2651",
        "ok": "2651",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3710",
        "ok": "3710",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4557",
        "ok": "4557",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4727",
        "ok": "4727",
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
        "total": "0.222",
        "ok": "0.222",
        "ko": "-"
    }
},
contents: {
"req_update-specific-39fc2": {
        type: "REQUEST",
        name: "Update specific User",
path: "Update specific User",
pathFormatted: "req_update-specific-39fc2",
stats: {
    "name": "Update specific User",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4769",
        "ok": "4769",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4769",
        "ok": "4769",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4769",
        "ok": "4769",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4769",
        "ok": "4769",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4769",
        "ok": "4769",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4769",
        "ok": "4769",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4769",
        "ok": "4769",
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
    },"req_delete-user-a2ffc": {
        type: "REQUEST",
        name: "delete User",
path: "delete User",
pathFormatted: "req_delete-user-a2ffc",
stats: {
    "name": "delete User",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "percentiles2": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "percentiles3": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "percentiles4": {
        "total": "533",
        "ok": "533",
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
        "total": "0.111",
        "ok": "0.111",
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
