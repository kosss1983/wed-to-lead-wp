function OEPL_checkChange($this){
	var value = $this.val().trim();
    var sv=$this.data("stored");
    if(value!=sv)
    {
        $this.trigger("simpleChange");
    }
}

jQuery(document).ready(function(){	
	jQuery(".OEPL_is_show").switchButton({
		labels_placement: "right",
		on_label: 'On',
  		off_label: 'Off'
	});
	
	jQuery(".OEPL_is_required").switchButton({
		labels_placement: "right",
	});
	
	jQuery(".OEPL_is_hidden").switchButton({
		labels_placement: "right",
	});
	
	jQuery(".OEPL_required").switchButton({
		labels_placement: "right",
	});
	
	jQuery(this).data("stored",jQuery(this).val());   
	    jQuery(".OEPL_custom_label").bind("keyup keydown keypress change blur",function(e){  
	    OEPL_checkChange(jQuery(this));
	});
	
	jQuery(".OEPL_custom_label").bind("simpleChange",function(e){
	    jQuery(this).siblings('.OEPL_small_button').show();
	});
		
	jQuery(".OEPL_custom_label").each(function(){
		OEPL_checkChange(jQuery(this));	
	});
	
	
	jQuery(this).data("stored",jQuery(this).val());   
	    jQuery(".OEPL_custom_order").bind("keyup keydown keypress change blur",function(e){  
	    OEPL_checkChange(jQuery(this));
	});
	
	jQuery(".OEPL_custom_order").bind("simpleChange",function(e){
	    jQuery(this).siblings('.OEPL_small_button').show();
	});
	
	jQuery(".OEPL_custom_order").each(function(){
		OEPL_checkChange(jQuery(this));	
	});
	
	jQuery(".OEPL_grid_status").change(function() {
		var THIS = jQuery(this);
		var action = jQuery(this).data("action");
		var pid = jQuery(this).data("pid");
		var data = {};
		data.action = 'OEPL_Grid_Ajax_Action';
		data.OEPL_Action = action;
		data.pid = pid;
		jQuery.post(ajaxurl, data, function(response) {
			//console.log(response);
		});
		return false;
	});
	
	jQuery(".OEPL_save_custom_label").click(function(){
		var THIS = jQuery(this);
		var val = jQuery(this).siblings('.OEPL_custom_label').val();
		var pid = jQuery(this).data("pid");
		var data = {};
		data.action = 'OEPL_save_custom_label';
		data.pid = pid;
		data.label = val;
		THIS.find('.fa').removeClass('fa-check-square');
		THIS.find('.fa').addClass('fa-spinner');
		THIS.find('.fa').addClass('fa-spin');
		// jQuery('#AjaxWaiting').show();
		jQuery.post(ajaxurl, data, function(response) {
			THIS.find('.fa').addClass('fa-check-square');
			THIS.find('.fa').removeClass('fa-spinner');
			THIS.find('.fa').removeClass('fa-spin');
			THIS.hide();
			// jQuery('#AjaxWaiting').hide();
		});
		return false;
	});
	
	
	jQuery(".OEPL_save_custom_order").click(function(){
		var THIS = jQuery(this);
		var val = jQuery(this).siblings('.OEPL_custom_order').val();
		var pid = jQuery(this).data("pid");
		var data = {};
		data.action = 'OEPL_save_custom_order';
		data.pid = pid;
		data.label = val;
		THIS.find('.fa').removeClass('fa-check-square');
		THIS.find('.fa').addClass('fa-spinner');
		THIS.find('.fa').addClass('fa-spin');
		// jQuery('#AjaxWaiting').show();
		jQuery.post(ajaxurl, data, function(response) {
			THIS.find('.fa').addClass('fa-check-square');
			THIS.find('.fa').removeClass('fa-spinner');
			THIS.find('.fa').removeClass('fa-spin');
			THIS.hide();
			// jQuery('#AjaxWaiting').hide();
		});
		return false;
	});
});
