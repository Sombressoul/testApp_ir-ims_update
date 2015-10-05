//============================================================
Router.configure({
    layoutTemplate: "layoutOne"
});

//============================================================
Router.route("/", function () {
    this.render("home");
});

//============================================================
Router.route("/static_page_a", {

    layoutTemplate: "layoutOne",

    layoutPrerendering: false,

    action: function () {
        this.render("staticPageA");
    }

});

//============================================================
Router.route("/:pathIdC", {

    layoutTemplate: "layoutThree",

    layoutPrerendering: false,

    template: "pathThree",

    onBeforeRun: function () {

        console.log("PATH THREE: Call to 'onBeforeRun' hook!");

        if (this.ready()) {

            if (this.params.pathIdC == "pathThree") {
                console.log("Match client path C!");
                this.next();
            }
            else {
                console.log("Next client route from C.");
                this.nextRoute();
            }

        }
        else {
            this.render( "loading" );
        }

    },

    action: function () {
        this.render();
    }

});

//============================================================
Router.route("/:pathIdA", {

    layoutTemplate: "layoutOne",

    layoutPrerendering: false,

    template: "pathOne",

    subscriptions: function () {
        return [
            Meteor.subscribe("items_a"),
            Meteor.subscribe("items_b"),
            Meteor.subscribe("items_c")
        ];
    },

    onBeforeRun: function () {

        console.log("PATH ONE: Call to 'onBeforeRun' hook!");

        if (this.ready()) {

            if (this.params.pathIdA == "pathOne") {
                console.log("Match client path A!");
                this.next();
            }
            else {
                console.log("Next client route from A.");
                this.nextRoute();
            }

        }
        else {
            this.render( "loading" );
        }

    },

    action: function () {
        this.render();
    }

});

//============================================================
Router.route("/static_page_c", {

    layoutTemplate: "layoutThree",

    action: function () {
        this.render("staticPageC");
    }

});

//============================================================
Router.route("/:pathIdB", {

    layoutTemplate: "layoutTwo",

    layoutPrerendering: false,

    template: "pathTwo",

    onBeforeRun: function () {

        console.log("PATH TWO: Call to 'onBeforeRun' hook!");

        if (this.ready()) {

            if (this.params.pathIdB == "pathTwo") {
                console.log("Match client path B!");
                this.next();
            }
            else {
                console.log("Next client route from B.");
                this.nextRoute();
            }

        }
        else {
            this.render( "loading" );
        }

    },

    action: function () {
        this.render();
    }

});

//============================================================
Router.route("/static_page_b", {

    layoutTemplate: "layoutTwo",

    action: function () {
        this.render("staticPageB");
    }

});