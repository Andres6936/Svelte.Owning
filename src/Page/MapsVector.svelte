<script>
    // @formatter:on
    document.addEventListener("DOMContentLoaded", function () {
        ('#map-world').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            color: 'rgba(120, 130, 140, .1)',
            borderColor: 'transparent',
            scaleColors: ["#d2e1f3", "#206bc4"],
            normalizeFunction: 'polynomial',
            values: (chart_data = {
                "af": 16,
                "al": 11,
                "dz": 158,
                "ao": 85,
                "ag": 1,
                "ar": 351,
                "am": 8,
                "au": 1219,
                "at": 366,
                "az": 52,
                "bs": 7,
                "bh": 21,
                "bd": 105,
                "bb": 3,
                "by": 52,
                "be": 461,
                "bz": 1,
                "bj": 6,
                "bt": 1,
                "bo": 19,
                "ba": 16,
                "bw": 12,
                "br": 2023,
                "bn": 11,
                "bg": 44,
                "bf": 8,
                "bi": 1,
                "kh": 11,
                "cm": 21,
                "ca": 1563,
                "cv": 1,
                "cf": 2,
                "td": 7,
                "cl": 199,
                "cn": 5745,
                "co": 283,
                "km": 0,
                "cd": 12,
                "cg": 11,
                "cr": 35,
                "ci": 22,
                "hr": 59,
                "cy": 22,
                "cz": 195,
                "dk": 304,
                "dj": 1,
                "dm": 0,
                "do": 50,
                "ec": 61,
                "eg": 216,
                "sv": 21,
                "gq": 14,
                "er": 2,
                "ee": 19,
                "et": 30,
                "fj": 3,
                "fi": 231,
                "fr": 2555,
                "ga": 12,
                "gm": 1,
                "ge": 11,
                "de": 3305,
                "gh": 18,
                "gr": 305,
                "gd": 0,
                "gt": 40,
                "gn": 4,
                "gw": 0,
                "gy": 2,
                "ht": 6,
                "hn": 15,
                "hk": 226,
                "hu": 132,
                "is": 12,
                "in": 1430,
                "id": 695,
                "ir": 337,
                "iq": 84,
                "ie": 204,
                "il": 201,
                "it": 2036,
                "jm": 13,
                "jp": 5390,
                "jo": 27,
                "kz": 129,
                "ke": 32,
                "ki": 0,
                "kr": 986,
                "undefined": 5,
                "kw": 117,
                "kg": 4,
                "la": 6,
                "lv": 23,
                "lb": 39,
                "ls": 1,
                "lr": 0,
                "ly": 77,
                "lt": 35,
                "lu": 52,
                "mk": 9,
                "mg": 8,
                "mw": 5,
                "my": 218,
                "mv": 1,
                "ml": 9,
                "mt": 7,
                "mr": 3,
                "mu": 9,
                "mx": 1004,
                "md": 5,
                "mn": 5,
                "me": 3,
                "ma": 91,
                "mz": 10,
                "mm": 35,
                "na": 11,
                "np": 15,
                "nl": 770,
                "nz": 138,
                "ni": 6,
                "ne": 5,
                "ng": 206,
                "no": 413,
                "om": 53,
                "pk": 174,
                "pa": 27,
                "pg": 8,
                "py": 17,
                "pe": 153,
                "ph": 189,
                "pl": 438,
                "pt": 223,
                "qa": 126,
                "ro": 158,
                "ru": 1476,
                "rw": 5,
                "ws": 0,
                "st": 0,
                "sa": 434,
                "sn": 12,
                "rs": 38,
                "sc": 0,
                "sl": 1,
                "sg": 217,
                "sk": 86,
                "si": 46,
                "sb": 0,
                "za": 354,
                "es": 1374,
                "lk": 48,
                "kn": 0,
                "lc": 1,
                "vc": 0,
                "sd": 65,
                "sr": 3,
                "sz": 3,
                "se": 444,
                "ch": 522,
                "sy": 59,
                "tw": 426,
                "tj": 5,
                "tz": 22,
                "th": 312,
                "tl": 0,
                "tg": 3,
                "to": 0,
                "tt": 21,
                "tn": 43,
                "tr": 729,
                "tm": 0,
                "ug": 17,
                "ua": 136,
                "ae": 239,
                "gb": 2258,
                "us": 4624,
                "uy": 40,
                "uz": 37,
                "vu": 0,
                "ve": 285,
                "vn": 101,
                "ye": 30,
                "zm": 15,
                "zw": 5
            }),
            onLabelShow: function (event, label, code) {
                if (chart_data[code] > 0) {
                    label.append(': <strong>' + chart_data[code] + '</strong>');
                }
            },
        });
    });
    // @formatter:off
    // @formatter:on
    document.addEventListener("DOMContentLoaded", function () {
        ('#map-europe').vectorMap({
            map: 'europe_en',
            backgroundColor: 'transparent',
            color: 'rgba(120, 130, 140, .1)',
            borderColor: 'transparent',
            enableZoom: true,
        });
    });
    // @formatter:off
    // @formatter:on
    document.addEventListener("DOMContentLoaded", function () {
        ('#map-usa').vectorMap({
            map: 'usa_en',
            backgroundColor: 'transparent',
            color: 'rgba(120, 130, 140, .1)',
            borderColor: 'transparent',
        });
    });
    // @formatter:off
</script>

<div class="container-xl">
    <!-- Page title -->
    <div class="page-header d-print-none">
        <div class="row align-items-center">
            <div class="col">
                <h2 class="page-title">
                    Vector Maps
                </h2>
            </div>
        </div>
    </div>
    <div class="row row-cards">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">World map</div>
                    <div class="ratio ratio-16x9">
                        <div>
                            <div id="map-world" class="w-100 h-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">Map of Europe</div>
                    <div class="ratio ratio-16x9">
                        <div>
                            <div id="map-europe" class="w-100 h-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">Map of USA</div>
                    <div class="ratio ratio-16x9">
                        <div>
                            <div id="map-usa" class="w-100 h-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
