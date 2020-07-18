db.users.updateOne({_id : ObjectId("5efce8171eae77a187bda945")}, {$set: {{title: "Sports", frequency: 5}, {title: "Online Education", frequency: 4}, {title: "Mountain Climbing", frequency: 1}}})


db.users.updateOne({_id : ObjectId("5efce8171eae77a187bda945")}, {$set: {hobbies: [{title: "Sports", frequency: 5}]}})  