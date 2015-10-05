//============================================================
Router.route("/server_static_path_a", function () {

    this.response.end( "Server static path A." );

}, {where: "server"});

//============================================================
Router.route("/:serverPathIdC", function () {

    if ( this.params.serverPathIdC == "server_pathThree" ){
        console.log("Match server dynamic path C!");
        this.response.end( "Server dynamic path C." );
    }
    else {
        console.log("Next route from server dynamic path C...");
        this.nextRoute();
    }


}, {where: "server"});

//============================================================
Router.route("/:serverPathIdA", function () {

    this.response.end( "Server dynamic path A." );

}, {
    onBeforeRun: function(){

        console.log( "Server-side onBeforeRun executed." );

        if ( this.params.serverPathIdA == "server_pathOne" ){
            console.log("Match server dynamic path A!");
            this.next();
        }
        else {
            console.log("Next route from server dynamic path A...");
            this.nextRoute();
        }

    },
    where: "server"
});

//============================================================
Router.route("/server_static_path_c", function () {

    this.response.end( "Server static path C." );

}, {where: "server"});

//============================================================
Router.route("/:serverPathIdB", function () {

    if ( this.params.serverPathIdB == "server_pathTwo" ){
        console.log("Match server dynamic path B!");
        this.response.end( "Server dynamic path B." );
    }
    else {
        console.log("Next route from server dynamic path B...");
        this.nextRoute();
    }


}, {where: "server"});

//============================================================
Router.route("/server_static_path_b", function () {

    this.response.end( "Server static path B." );

}, {where: "server"});
