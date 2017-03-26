$(document).ready(function () {

$(".menu-toggle").click(function (e) {
		w = $(window).width();
		$(".content-main").toggleClass("push");
		$(".header-fixed").toggleClass("push");
		$(".side-left").toggleClass("show");
		e.stopPropagation();
	});
    

        (function () {
            $("#chart-container").insertFusionCharts({
                type: "mscombi2d",
                width: "100%",
                height: "310",
                dataFormat: "json",
                dataSource: {
                    "chart": {
                        "caption": "Tahun 2017",
                        "exportEnabled": "1",
                        "numberprefix": "Rp.",
                        "theme": "ocean",
                    },
                    "categories": [
                        {
                            "category": [
                                {
                                    "label": "Jan"
                        }
                                , {
                                    "label": "Feb"
                        }
                                , {
                                    "label": "Mar"
                        }
                                , {
                                    "label": "Apr"
                        }
                                , {
                                    "label": "May"
                        }
                                , {
                                    "label": "Jun"
                        }
                                , {
                                    "label": "Jul"
                        }
                                , {
                                    "label": "Aug"
                        }
                                , {
                                    "label": "Sep"
                        }
                                , {
                                    "label": "Oct"
                        }
                                , {
                                    "label": "Nov"
                        }
                                , {
                                    "label": "Dec"
                        }
                    ]
                }
            ],
                    "dataset": [
                        {
                            "seriesname": "Pendapatan",
                            "data": [
                                {
                                    "value": "1600000"
                        }
                                , {
                                    "value": "2100000"
                        }
                                , {
                                    "value": "1800000"
                        }
                                , {
                                    "value": "1900000"
                        }
                                , {
                                    "value": "1400000"
                        }
                                , {
                                    "value": "2100000"
                        }
                                , {
                                    "value": "1600000"
                        }
                                , {
                                    "value": "2200000"
                        }
                                , {
                                    "value": "1700000"
                        }
                                , {
                                    "value": "2500000"
                        }
                                , {
                                    "value": "1900000"
                        }
                                , {
                                    "value": "2300000"
                        }
                    ]
                }
                        , {
                            "seriesname": "Target Pendapatan",
                            "renderas": "line",
                            "showvalues": "0",
                            "data": [
                                {
                                    "value": "1500000"
                        }
                                , {
                                    "value": "1600000"
                        }
                                , {
                                    "value": "1700000"
                        }
                                , {
                                    "value": "1800000"
                        }
                                , {
                                    "value": "1600000"
                        }
                                , {
                                    "value": "1700000"
                        }
                                , {
                                    "value": "1900000"
                        }
                                , {
                                    "value": "1800000"
                        }
                                , {
                                    "value": "2000000"
                        }
                                , {
                                    "value": "2100000"
                        }
                                , {
                                    "value": "1900000"
                        }
                                , {
                                    "value": "2300000"
                        }
                    ]
                }
                        , {
                            "seriesname": "Keuntungan",
                            "renderas": "area",
                            "showvalues": "0",
                            "data": [
                                {
                                    "value": "400000"
                        }
                                , {
                                    "value": "500000"
                        }
                                , {
                                    "value": "300000"
                        }
                                , {
                                    "value": "400000"
                        }
                                , {
                                    "value": "100000"
                        }
                                , {
                                    "value": "700000"
                        }
                                , {
                                    "value": "100000"
                        }
                                , {
                                    "value": "400000"
                        }
                                , {
                                    "value": "100000"
                        }
                                , {
                                    "value": "800000"
                        }
                                , {
                                    "value": "200000"
                        }
                                , {
                                    "value": "700000"
                        }
                    ]
                }
            ]
                }
            });
        }());
    
    
        FusionCharts.ready(function () {
            var btn = document.getElementById("update");
            btn.addEventListener("click", function () {
                $("#chart-grap").updateFusionCharts({
                    "type": "line"
                });
            });
            var cosmetics = {
                "caption": "Maret",
                "paletteColors": "#0075c2",
                "bgColor": "#ffffff",
                "borderAlpha": "20",
                "canvasBorderAlpha": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "#ffffff",
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14"
            };
            var dataArray = [{
                "label": "F. Wanita",
                "value": "1287"
    }, {
                "label": "F. Pria",
                "value": "1861"
    }, {
                "label": "Komputer",
                "value": "824"
    }, {
                "label": "Laptop",
                "value": "543"
    }, {
                "label": "Handphone",
                "value": "1204"
    }, {
                "label": "Kamera",
                "value": "672"
    }, {
                "label": "Elektronik",
                "value": "941"
    }, {
                "label": "Olahraga",
                "value": "1151"
    }, {
                "label": "Baby & Mom",
                "value": "425"
    }];
            // Using FusionChart"s jQuery method insertFusionCharts() to create FusionCharts.
            $("#chart-grap").insertFusionCharts({
                type: "column2d",
                width: "100%",
                height: "300",
                dataFormat: "json",
                dataSource: {
                    chart: cosmetics,
                    data: dataArray
                }
            })
        });
    
    
        var ctx = document.getElementById("grafik-donut");
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
        "JNE"
        , "TIKI"
        , "POS"
    ],
                datasets: [
                    {
                        data: [2134, 1345, 879],
                        backgroundColor: [
                "#025195"
                , "#2c3848"
                , "#de7e37"
            ],
                        hoverBackgroundColor: [
                "#054a86"
                , "#161f2a"
                , "#d07a3b"
            ]
        }]
            },
            options: {
                animation: {
                    animateScale: true
                }
            }
        });
    

    
        Morris.Donut({
            element: "mydonut-send",
            data: [
                {
                    label: "JNE",
                    value: 425
                },
                {
                    label: "TIKI",
                    value: 321
                },
                {
                    label: "POS INDONESIA",
                    value: 312
                },
                {
                    label: "GOJEK",
                    value: 123
                }
  ]
        });
    
});