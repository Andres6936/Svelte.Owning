<script>
    import PositiveIndicative from "../SVG/PositiveIndicative.svelte";
    import NegativeIndicative from "../SVG/NegativeIndicative.svelte";

    // @type {string} Indicate the title of resume.
    export let titleResume;
    // @type {number} Indicate the amount of growth obtained or lost.
    export let amountDaily;
    // @type {number} Indicate the percentage of growth obtained or lost.
    export let percentageGrowth;
</script>

<div class="card">
    <div class="card-body p-2 text-center">
        {#if percentageGrowth >= 0}
            <div class="text-end text-green">
            <span class="text-green d-inline-flex align-items-center lh-1">
              {percentageGrowth}% <PositiveIndicative/>
            </span>
            </div>
        {:else}
            <div class="text-end text-red">
            <span class="text-red d-inline-flex align-items-center lh-1">
              {percentageGrowth}% <NegativeIndicative/>
            </span>
            </div>
        {/if}
        <div class="h1 m-0">{amountDaily}</div>
        <div class="text-muted mb-3">{titleResume}</div>
    </div>
</div>
