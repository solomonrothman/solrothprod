class Collapse{
    constructor() {
        console.log('settings up collapse');
        this.getCollapseTrigger();
    }

    getCollapseTrigger(){
        // Get all trigger elements by class name.
        let collapseWrappers = document.getElementsByClassName('collapse-wrapper');
        // Check if actually have trigger
        console.log(collapseWrappers.length);
        if(collapseWrappers.length > 0){
            // we have a trigger, need to find the target.

            Array.from(collapseWrappers).forEach((collapseWrapper) => {
                // Do stuff here
                console.log(collapseWrapper);
                // console.log(collapseWrapper.closest(".collapse-target"));
                let ctarget = collapseWrapper.querySelector(".collapse-target");  // get target in wrapper
                console.log(ctarget);
            });

        }

        // console.log(collapseTriggers);
    }
}
export { Collapse };