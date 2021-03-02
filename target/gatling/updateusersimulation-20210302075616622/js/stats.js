var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "402",
        "ko": "98"
    },
    "minResponseTime": {
        "total": "4643",
        "ok": "4643",
        "ko": "17044"
    },
    "maxResponseTime": {
        "total": "22076",
        "ok": "19852",
        "ko": "22076"
    },
    "meanResponseTime": {
        "total": "12627",
        "ok": "11454",
        "ko": "17437"
    },
    "standardDeviation": {
        "total": "3813",
        "ok": "3317",
        "ko": "500"
    },
    "percentiles1": {
        "total": "13008",
        "ok": "10720",
        "ko": "17419"
    },
    "percentiles2": {
        "total": "16105",
        "ok": "14751",
        "ko": "17503"
    },
    "percentiles3": {
        "total": "17526",
        "ok": "16387",
        "ko": "17651"
    },
    "percentiles4": {
        "total": "17659",
        "ok": "17471",
        "ko": "17832"
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
    "count": 402,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 98,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.739",
        "ok": "17.478",
        "ko": "4.261"
    }
},
contents: {
"req_get-tuser-reque-d0008": {
        type: "REQUEST",
        name: "get tuser request",
path: "get tuser request",
pathFormatted: "req_get-tuser-reque-d0008",
stats: {
    "name": "get tuser request",
    "numberOfRequests": {
        "total": "500",
        "ok": "402",
        "ko": "98"
    },
    "minResponseTime": {
        "total": "4643",
        "ok": "4643",
        "ko": "17044"
    },
    "maxResponseTime": {
        "total": "22076",
        "ok": "19852",
        "ko": "22076"
    },
    "meanResponseTime": {
        "total": "12627",
        "ok": "11454",
        "ko": "17437"
    },
    "standardDeviation": {
        "total": "3813",
        "ok": "3317",
        "ko": "500"
    },
    "percentiles1": {
        "total": "13008",
        "ok": "10720",
        "ko": "17419"
    },
    "percentiles2": {
        "total": "16105",
        "ok": "14751",
        "ko": "17503"
    },
    "percentiles3": {
        "total": "17526",
        "ok": "16387",
        "ko": "17651"
    },
    "percentiles4": {
        "total": "17659",
        "ok": "17471",
        "ko": "17832"
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
    "count": 402,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 98,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.739",
        "ok": "17.478",
        "ko": "4.261"
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
