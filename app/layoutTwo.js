if ( Meteor.isClient ){

    Template.layoutTwo.rendered = function(){
        console.log("[" + (new Date).toISOString().replace(/z|t/gi, ' ').trim() + "]: Layout Two rendered.");
    };

    Template.layoutTwo.events({
        "click div.nav-container-cell.server a": function( event ){
            event.preventDefault();

            var path = event.target.attributes.href.value;

            $.get(path, function (data) {
                $("div.routing-result").html("<i>AJAX-request result:</i> " + data);
            },"html");

        }
    });

}
