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
        "total": "5987",
        "ok": "5987",
        "ko": "8417"
    },
    "maxResponseTime": {
        "total": "8417",
        "ok": "5987",
        "ko": "8417"
    },
    "meanResponseTime": {
        "total": "7202",
        "ok": "5987",
        "ko": "8417"
    },
    "standardDeviation": {
        "total": "1215",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "7202",
        "ok": "5987",
        "ko": "8417"
    },
    "percentiles2": {
        "total": "7810",
        "ok": "5987",
        "ko": "8417"
    },
    "percentiles3": {
        "total": "8296",
        "ok": "5987",
        "ko": "8417"
    },
    "percentiles4": {
        "total": "8393",
        "ok": "5987",
        "ko": "8417"
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
        "total": "0.111",
        "ok": "0.056",
        "ko": "0.056"
    }
},
contents: {
"req_add-user-reques-1aa2d": {
        type: "REQUEST",
        name: "Add User Request",
path: "Add User Request",
pathFormatted: "req_add-user-reques-1aa2d",
stats: {
    "name": "Add User Request",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5987",
        "ok": "5987",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5987",
        "ok": "5987",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5987",
        "ok": "5987",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5987",
        "ok": "5987",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5987",
        "ok": "5987",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5987",
        "ok": "5987",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5987",
        "ok": "5987",
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
        "total": "0.056",
        "ok": "0.056",
        "ko": "-"
    }
}
    },"req_get-user-reques-a4fef": {
        type: "REQUEST",
        name: "get user request",
path: "get user request",
pathFormatted: "req_get-user-reques-a4fef",
stats: {
    "name": "get user request",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "8417",
        "ok": "-",
        "ko": "8417"
    },
    "maxResponseTime": {
        "total": "8417",
        "ok": "-",
        "ko": "8417"
    },
    "meanResponseTime": {
        "total": "8417",
        "ok": "-",
        "ko": "8417"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8417",
        "ok": "-",
        "ko": "8417"
    },
    "percentiles2": {
        "total": "8417",
        "ok": "-",
        "ko": "8417"
    },
    "percentiles3": {
        "total": "8417",
        "ok": "-",
        "ko": "8417"
    },
    "percentiles4": {
        "total": "8417",
        "ok": "-",
        "ko": "8417"
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
        "total": "0.056",
        "ok": "-",
        "ko": "0.056"
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
