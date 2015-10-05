ItemsA = new Meteor.Collection("items_a");
ItemsB = new Meteor.Collection("items_b");
ItemsC = new Meteor.Collection("items_c");

if (Meteor.isServer) {

    Meteor.publish("items_a", function () {
        return ItemsA.find();
    });

    Meteor.publish("items_b", function () {
        return ItemsB.find();
    });

    Meteor.publish("items_c", function () {
        return ItemsC.find();
    });

}

if (Meteor.isClient) {

    //Meteor.subscribe("items_a");
    //Meteor.subscribe("items_b");
    //Meteor.subscribe("items_c");

}