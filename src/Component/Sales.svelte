<script>
    import DropdownSelect from "./Atomic/DropdownSelect.svelte";
</script>
<div class="card">
    <div class="card-body">
        <div class="d-flex align-items-center">
            <div class="subheader">Sales</div>
            <div class="ms-auto lh-1">
                <DropdownSelect/>
            </div>
        </div>
        <div class="h1 mb-3">75%</div>
        <div class="d-flex mb-2">
            <div>Conversion rate</div>
            <div class="ms-auto">
                      <span class="text-green d-inline-flex align-items-center lh-1">
                        7% <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                                                                                     fill="none"/><polyline
                              points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
                      </span>
            </div>
        </div>
        <div class="progress progress-sm">
            <div class="progress-bar bg-blue" style="width: 75%" role="progressbar"
                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <span class="visually-hidden">75% Complete</span>
            </div>
        </div>
    </div>
</div>
