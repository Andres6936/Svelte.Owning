<script>
    // @type {string} Indicate the title of daily resume.
    export let titleResume;
    // @type {string} Indicate the amount of growth obtained today.
    export let growthResume;
    // @type {string} Determine the background color of SVG.
    export let backgroundColor = "bg-blue";
</script>

<div class="card card-sm">
    <div class="card-body">
        <div class="row align-items-center">
            <div class="col-auto">
                  <span class="{backgroundColor} text-white avatar">
                      <!-- Space for draw a SVG (Icon) -->
                      <slot/>
                  </span>
            </div>
            <div class="col">
                <div class="font-weight-medium">
                    {titleResume}
                </div>
                <div class="text-muted">
                    {growthResume}
                </div>
            </div>
        </div>
    </div>
</div>
