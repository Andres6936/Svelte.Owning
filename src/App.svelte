<script>
	// @formatter:off

	document.addEventListener("DOMContentLoaded", function () {
		window.ApexCharts && (new ApexCharts(document.getElementById('chart-revenue-bg'), {
			chart: {
				type: "area",
				fontFamily: 'inherit',
				height: 40.0,
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
				name: "Profits",
				data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67]
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
		})).render();
	});
	// @formatter:on


	import Task from "./Task.svelte";
	import Sales from './Sales.svelte';
	import Header from './Header.svelte';
	import Footer from "./Footer.svelte";
	import Revenue from "./Revenue.svelte";
	import Invoices from "./Invoices.svelte";
	import PageTitle from './PageTitle.svelte';
	import Navigation from './Navigation.svelte';
	import NewClients from './NewClients.svelte';
	import NewWebsite from "./NewWebsite.svelte";
	import UIRedesign from "./UIRedesign.svelte";
	import ActiveUsers from './ActiveUsers.svelte';
	import UsingStorage from "./UsingStorage.svelte";
	import NewReport from "./Modal/NewReport.svelte";
	import RegisterEvents from "./RegisterEvents.svelte";
	import TrafficSummary from "./TrafficSummary.svelte";
	import MostVisitedPages from "./MostVisitedPages.svelte";
	import SocialMediaTraffic from "./SocialMediaTraffic.svelte";
	import DevelopmentActivity from "./DevelopmentActivity.svelte";
</script>

<div class="page">
	<Header/>
	<Navigation/>
	<div class="content">
		<div class="container-xl">
			<PageTitle/>
			<div class="row row-deck row-cards">
				<div class="col-sm-6 col-lg-3">
					<Sales/>
				</div>
				<div class="col-sm-6 col-lg-3">
					<Revenue/>
				</div>
				<div class="col-sm-6 col-lg-3">
					<NewClients/>
				</div>
				<div class="col-sm-6 col-lg-3">
					<ActiveUsers/>
				</div>
				<div class="col-lg-6">
					<div class="row row-cards">
						<div class="col-12">
							<TrafficSummary/>
						</div>
						<div class="col-12">
							<UsingStorage/>
						</div>
					</div>

				</div>

				<!-- <WorldMap/> !-->

				<div class="col-lg-6">
					<div class="row row-cards row-deck">
						<div class="col-sm-6">
							<NewWebsite/>
						</div>
						<div class="col-sm-6">
							<UIRedesign/>
						</div>
						<div class="col-sm-4">
							<div class="card">
								<div class="card-body p-2 text-center">
									<div class="text-end text-green">
                        <span class="text-green d-inline-flex align-items-center lh-1">
                          6% <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24"
								  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
								  stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"
																					   fill="none"/><polyline
								points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
                        </span>
									</div>
									<div class="h1 m-0">43</div>
									<div class="text-muted mb-3">New Tickets</div>
								</div>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="card">
								<div class="card-body p-2 text-center">
									<div class="text-end text-red">
                        <span class="text-red d-inline-flex align-items-center lh-1">
                          -2% <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24"
								   viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
								   stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"
																						fill="none"/><polyline
								points="3 7 9 13 13 9 21 17"/><polyline points="21 10 21 17 14 17"/></svg>
                        </span>
									</div>
									<div class="h1 m-0">95</div>
									<div class="text-muted mb-3">Daily Earnings</div>
								</div>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="card">
								<div class="card-body p-2 text-center">
									<div class="text-end text-green">
                        <span class="text-green d-inline-flex align-items-center lh-1">
                          9% <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24"
								  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
								  stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"
																					   fill="none"/><polyline
								points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
                        </span>
									</div>
									<div class="h1 m-0">7</div>
									<div class="text-muted mb-3">New Replies</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<DevelopmentActivity/>
				</div>
				<div class="col-md-8">
					<RegisterEvents/>
				</div>
				<div class="col-md-4">
					<div class="row row-cards">
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-blue text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon"
																	   width="24" height="24" viewBox="0 0 24 24"
																	   stroke-width="2" stroke="currentColor"
																	   fill="none" stroke-linecap="round"
																	   stroke-linejoin="round"><path stroke="none"
																									 d="M0 0h24v24H0z"
																									 fill="none"/><path
								  d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"/><path
								  d="M12 3v3m0 12v3"/></svg>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												132 Sales
											</div>
											<div class="text-muted">
												12 waiting payments
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-green text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon"
																		width="24" height="24" viewBox="0 0 24 24"
																		stroke-width="2" stroke="currentColor"
																		fill="none" stroke-linecap="round"
																		stroke-linejoin="round"><path stroke="none"
																									  d="M0 0h24v24H0z"
																									  fill="none"/><circle
								  cx="9" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path
								  d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"/></svg>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												78 Orders
											</div>
											<div class="text-muted">
												32 shipped
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-yellow text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon"
																		 width="24" height="24" viewBox="0 0 24 24"
																		 stroke-width="2" stroke="currentColor"
																		 fill="none" stroke-linecap="round"
																		 stroke-linejoin="round"><path stroke="none"
																									   d="M0 0h24v24H0z"
																									   fill="none"/><circle
								  cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path
								  d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												1352 Members
											</div>
											<div class="text-muted">
												163 registered today
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-twitter text-white avatar"><svg xmlns="http://www.w3.org/2000/svg"
																		  class="icon" width="24" height="24"
																		  viewBox="0 0 24 24" stroke-width="2"
																		  stroke="currentColor" fill="none"
																		  stroke-linecap="round"
																		  stroke-linejoin="round"><path stroke="none"
																										d="M0 0h24v24H0z"
																										fill="none"/><path
								  d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"/></svg>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												623 Shares
											</div>
											<div class="text-muted">
												16 today
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card card-sm">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col-auto">
                          <span class="bg-facebook text-white avatar"><svg xmlns="http://www.w3.org/2000/svg"
																		   class="icon" width="24" height="24"
																		   viewBox="0 0 24 24" stroke-width="2"
																		   stroke="currentColor" fill="none"
																		   stroke-linecap="round"
																		   stroke-linejoin="round"><path stroke="none"
																										 d="M0 0h24v24H0z"
																										 fill="none"/><path
								  d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/></svg>
                          </span>
										</div>
										<div class="col">
											<div class="font-weight-medium">
												132 Likes
											</div>
											<div class="text-muted">
												21 today
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12 col-lg-8">
					<MostVisitedPages/>
				</div>
				<div class="col-md-6 col-lg-4">
					<a href="https://github.com/sponsors/codecalm" class="card card-sponsor" target="_blank"
					   rel="noopener" style="background-image: url(./static/sponsor-banner-homepage.svg)"
					   aria-label="Sponsor Tabler!">
						<div class="card-body"></div>
					</a>
				</div>
				<div class="col-md-6 col-lg-4">
					<SocialMediaTraffic/>
				</div>
				<div class="col-md-12 col-lg-8">
					<Task/>
				</div>
				<div class="col-12">
					<Invoices/>
				</div>
			</div>
		</div>
		<Footer/>
	</div>
</div>
<NewReport/>
