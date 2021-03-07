var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "160",
        "ok": "160",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1118",
        "ok": "1118",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1998",
        "ok": "1998",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1228",
        "ok": "1228",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1191",
        "ok": "1191",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1241",
        "ok": "1241",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1382",
        "ok": "1382",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1904",
        "ok": "1904",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 92,
    "percentage": 57
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 68,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.848",
        "ok": "4.848",
        "ko": "-"
    }
},
contents: {
"req_get-single-user-2340f": {
        type: "REQUEST",
        name: "Get Single User Request",
path: "Get Single User Request",
pathFormatted: "req_get-single-user-2340f",
stats: {
    "name": "Get Single User Request",
    "numberOfRequests": {
        "total": "160",
        "ok": "160",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1118",
        "ok": "1118",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1998",
        "ok": "1998",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1228",
        "ok": "1228",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1191",
        "ok": "1191",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1241",
        "ok": "1241",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1382",
        "ok": "1382",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1904",
        "ok": "1904",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 92,
    "percentage": 57
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 68,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.848",
        "ok": "4.848",
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
