<script>
    import ApexCharts from '../Chart/Apexchart/index.min.js';
    import Table from "./Table/Table.svelte";

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

    const sparklineActivity = {
        chart: {
            type: "radialBar",
            fontFamily: 'inherit',
            height: 40,
            width: 40,
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
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '75%'
                },
                track: {
                    margin: 0
                },
                dataLabels: {
                    show: false
                }
            }
        },
        colors: ["#206bc4"],
        series: [35],
    };

    const chartDevelopmentActivity = {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 192,
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Purchases",
            data: [3, 5, 4, 6, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 8, 4, 14, 30, 17, 19, 15, 14, 25, 32, 40, 55, 60, 48, 52, 70]
        }],
        grid: {
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
        ],
        colors: ["#206bc4"],
        legend: {
            show: false,
        },
        point: {
            show: false
        },
    };

</script>

<div class="card">
    <div class="card-header border-0">
        <div class="card-title">Development activity</div>
    </div>
    <div class="position-relative">
        <div class="position-absolute top-0 left-0 px-3 mt-1 w-50">
            <div class="row g-2">
                <div class="col-auto">
                    <div class="chart-sparkline chart-sparkline-square" use:renderApexChart={sparklineActivity}></div>
                </div>
                <div class="col">
                    <div>Today's Earning: $4,262.40</div>
                    <div class="text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline text-green"
                             width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                             stroke="currentColor" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="3 17 9 11 13 15 21 7"/>
                            <polyline points="14 7 21 7 21 14"/>
                        </svg>
                        +5% more than yesterday
                    </div>
                </div>
            </div>
        </div>
        <div use:renderApexChart={chartDevelopmentActivity}></div>
    </div>
    <div class="table-responsive">

        <Table headers={["User", "Commit", "Date"]} extraClass="card-table table-vcenter">
            <tr>
                <td class="w-1">
                                        <span class="avatar avatar-sm"
                                              style="background-image: url(./static/avatars/000m.jpg)"></span>
                </td>
                <td class="td-truncate">
                    <div class="text-truncate">
                        Fix dart Sass compatibility (#29755)
                    </div>
                </td>
                <td class="text-nowrap text-muted">28 Nov 2019</td>
            </tr>
            <tr>
                <td class="w-1">
                    <span class="avatar avatar-sm">JL</span>
                </td>
                <td class="td-truncate">
                    <div class="text-truncate">
                        Change deprecated html tags to text decoration classes (#29604)
                    </div>
                </td>
                <td class="text-nowrap text-muted">27 Nov 2019</td>
            </tr>
            <tr>
                <td class="w-1">
                                        <span class="avatar avatar-sm"
                                              style="background-image: url(./static/avatars/002m.jpg)"></span>
                </td>
                <td class="td-truncate">
                    <div class="text-truncate">
                        justify-content:between ⇒ justify-content:space-between (#29734)
                    </div>
                </td>
                <td class="text-nowrap text-muted">26 Nov 2019</td>
            </tr>
            <tr>
                <td class="w-1">
                                        <span class="avatar avatar-sm"
                                              style="background-image: url(./static/avatars/003m.jpg)"></span>
                </td>
                <td class="td-truncate">
                    <div class="text-truncate">
                        Update change-version.js (#29736)
                    </div>
                </td>
                <td class="text-nowrap text-muted">26 Nov 2019</td>
            </tr>
            <tr>
                <td class="w-1">
                                        <span class="avatar avatar-sm"
                                              style="background-image: url(./static/avatars/000f.jpg)"></span>
                </td>
                <td class="td-truncate">
                    <div class="text-truncate">
                        Regenerate package-lock.json (#29730)
                    </div>
                </td>
                <td class="text-nowrap text-muted">25 Nov 2019</td>
            </tr>
        </Table>
    </div>
</div>
