<script>
    // @type {string} Indicate the title of resume.
    export let titleResume;
    // @type {number} Indicate the amount of growth obtained or lost.
    export let amountDaily;
    // @type {number} Indicate the percentage of growth obtained or lost.
    export let percentageGrowth;
</script>

<div class="card">
    <div class="card-body p-2 text-center">
        <div class="text-end text-green">
            <span class="text-green d-inline-flex align-items-center lh-1">
              {percentageGrowth}% <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24"
                                       viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                       stroke-linecap="round" stroke-linejoin="round"><path stroke="none"
                                                                                            d="M0 0h24v24H0z"
                                                                                            fill="none"/><polyline
                    points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
            </span>
        </div>
        <div class="h1 m-0">{amountDaily}</div>
        <div class="text-muted mb-3">{titleResume}</div>
    </div>
</div>
