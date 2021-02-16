var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "816",
        "ko": "184"
    },
    "minResponseTime": {
        "total": "6783",
        "ok": "6783",
        "ko": "11157"
    },
    "maxResponseTime": {
        "total": "23577",
        "ok": "23577",
        "ko": "21165"
    },
    "meanResponseTime": {
        "total": "15510",
        "ok": "14496",
        "ko": "20005"
    },
    "standardDeviation": {
        "total": "4251",
        "ok": "3980",
        "ko": "1787"
    },
    "percentiles1": {
        "total": "14760",
        "ok": "13356",
        "ko": "20480"
    },
    "percentiles2": {
        "total": "19716",
        "ok": "19110",
        "ko": "20588"
    },
    "percentiles3": {
        "total": "20932",
        "ok": "20156",
        "ko": "21046"
    },
    "percentiles4": {
        "total": "21635",
        "ok": "21658",
        "ko": "21122"
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
    "count": 816,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 184,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "27.2",
        "ko": "6.133"
    }
},
contents: {
"req_get-user-reques-a4fef": {
        type: "REQUEST",
        name: "get user request",
path: "get user request",
pathFormatted: "req_get-user-reques-a4fef",
stats: {
    "name": "get user request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "816",
        "ko": "184"
    },
    "minResponseTime": {
        "total": "6783",
        "ok": "6783",
        "ko": "11157"
    },
    "maxResponseTime": {
        "total": "23577",
        "ok": "23577",
        "ko": "21165"
    },
    "meanResponseTime": {
        "total": "15510",
        "ok": "14496",
        "ko": "20005"
    },
    "standardDeviation": {
        "total": "4251",
        "ok": "3980",
        "ko": "1787"
    },
    "percentiles1": {
        "total": "14760",
        "ok": "13356",
        "ko": "20480"
    },
    "percentiles2": {
        "total": "19716",
        "ok": "19110",
        "ko": "20588"
    },
    "percentiles3": {
        "total": "20932",
        "ok": "20156",
        "ko": "21046"
    },
    "percentiles4": {
        "total": "21635",
        "ok": "21658",
        "ko": "21122"
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
    "count": 816,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 184,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "27.2",
        "ko": "6.133"
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
