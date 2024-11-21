require(["dojo/_base/lang", "dojo/on"], function(lang, on){
    on(this.checkboxNode, 'change', lang.hitch(this, function(event) {
        // Handle the change event for the checkbox
        console.log('Checkbox changed:', this);
    }));
});
