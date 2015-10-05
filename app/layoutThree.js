if ( Meteor.isClient ){

    Template.layoutThree.rendered = function(){
        console.log("[" + (new Date).toISOString().replace(/z|t/gi, ' ').trim() + "]: Layout Three rendered.");
    };

    Template.layoutThree.events({
        "click div.nav-container-cell.server a": function( event ){
            event.preventDefault();

            var path = event.target.attributes.href.value;

            $.get(path, function (data) {
                $("div.routing-result").html("<i>AJAX-request result:</i> " + data);
            },"html");

        }
    });

}
