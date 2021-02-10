<script>

    import ApexCharts from '../Chart/Apexchart/index.min.js';
    import Svg24 from "../SVG/Svg24.svelte";

    export const renderApexChart = (node, options) => {
        const apexChart = new ApexCharts(node, options);
        apexChart.render();

        return {
            update(options) {
                apexChart.updateOptions(options);
            },
            destroy() {
                apexChart.destroy();
            }
        }
    };

    const sparklineBounceRate1 = {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 24,
            animations: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            width: 2,
            lineCap: "round",
        },
        series: [{
            color: "#206bc4",
            data: [17, 24, 20, 10, 5, 1, 4, 18, 13]
        }],
    };

    const sparklineBounceRate2 = {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 24,
            animations: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            width: 2,
            lineCap: "round",
        },
        series: [{
            color: "#206bc4",
            data: [13, 11, 19, 22, 12, 7, 14, 3, 21]
        }],
    };

    const sparklineBounceRate3 = {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 24,
            animations: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            width: 2,
            lineCap: "round",
        },
        series: [{
            color: "#206bc4",
            data: [10, 13, 10, 4, 17, 3, 23, 22, 19]
        }],
    };

    const sparklineBounceRate4 = {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 24,
            animations: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            width: 2,
            lineCap: "round",
        },
        series: [{
            color: "#206bc4",
            data: [6, 15, 13, 13, 5, 7, 17, 20, 19]
        }],
    };

    const sparklineBounceRate5 = {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 24,
            animations: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            width: 2,
            lineCap: "round",
        },
        series: [{
            color: "#206bc4",
            data: [2, 11, 15, 14, 21, 20, 8, 23, 18, 14]
        }],
    };

    const sparklineBounceRate6 = {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 24,
            animations: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            width: 2,
            lineCap: "round",
        },
        series: [{
            color: "#206bc4",
            data: [22, 12, 7, 14, 3, 21, 8, 23, 18, 14]
        }],
    };
</script>

<div class="card">
    <div class="card-header">
        <h3 class="card-title">Most Visited Pages</h3>
    </div>
    <div class="card-table table-responsive">
        <table class="table table-vcenter">
            <thead>
            <tr>
                <th>Page name</th>
                <th>Visitors</th>
                <th>Unique</th>
                <th colspan="2">Bounce rate</th>
            </tr>
            </thead>
            <tr>
                <td>
                    /about.html
                    <a href="#" class="ms-1" aria-label="Open website">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/>
                            <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"/>
                        </Svg24>
                    </a>
                </td>
                <td class="text-muted">4,896</td>
                <td class="text-muted">3,654</td>
                <td class="text-muted">82.54%</td>
                <td class="text-end w-1">
                    <div class="chart-sparkline chart-sparkline-sm" use:renderApexChart={sparklineBounceRate1}></div>
                </td>
            </tr>
            <tr>
                <td>
                    /special-promo.html
                    <a href="#" class="ms-1" aria-label="Open website">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/>
                            <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"/>
                        </Svg24>
                    </a>
                </td>
                <td class="text-muted">3,652</td>
                <td class="text-muted">3,215</td>
                <td class="text-muted">76.29%</td>
                <td class="text-end w-1">
                    <div class="chart-sparkline chart-sparkline-sm"
                         use:renderApexChart={sparklineBounceRate2}></div>
                </td>
            </tr>
            <tr>
                <td>
                    /news/1,new-ui-kit.html
                    <a href="#" class="ms-1" aria-label="Open website">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/>
                            <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"/>
                        </Svg24>
                    </a>
                </td>
                <td class="text-muted">3,256</td>
                <td class="text-muted">2,865</td>
                <td class="text-muted">72.65%</td>
                <td class="text-end w-1">
                    <div class="chart-sparkline chart-sparkline-sm"
                         use:renderApexChart={sparklineBounceRate3}></div>
                </td>
            </tr>
            <tr>
                <td>
                    /lorem-ipsum-dolor-sit-amet-very-long-url.html
                    <a href="#" class="ms-1" aria-label="Open website">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/>
                            <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"/>
                        </Svg24>
                    </a>
                </td>
                <td class="text-muted">986</td>
                <td class="text-muted">865</td>
                <td class="text-muted">44.89%</td>
                <td class="text-end w-1">
                    <div class="chart-sparkline chart-sparkline-sm"
                         use:renderApexChart={sparklineBounceRate4}></div>
                </td>
            </tr>
            <tr>
                <td>
                    /colors.html
                    <a href="#" class="ms-1" aria-label="Open website">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/>
                            <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"/>
                        </Svg24>
                    </a>
                </td>
                <td class="text-muted">912</td>
                <td class="text-muted">822</td>
                <td class="text-muted">41.12%</td>
                <td class="text-end w-1">
                    <div class="chart-sparkline chart-sparkline-sm"
                         use:renderApexChart={sparklineBounceRate5}></div>
                </td>
            </tr>
            <tr>
                <td>
                    /docs/index.html
                    <a href="#" class="ms-1" aria-label="Open website">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/>
                            <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"/>
                        </Svg24>
                    </a>
                </td>
                <td class="text-muted">855</td>
                <td class="text-muted">798</td>
                <td class="text-muted">32.65%</td>
                <td class="text-end w-1">
                    <div class="chart-sparkline chart-sparkline-sm"
                         use:renderApexChart={sparklineBounceRate6}></div>
                </td>
            </tr>
        </table>
    </div>
</div>
