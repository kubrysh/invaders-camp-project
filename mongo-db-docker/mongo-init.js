db.createUser(
    {
        user: "admin",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "blogDB"
            }
        ]
    }
);

db.users.insertMany([
    {
        _id: ObjectId("61ae6085cff5c15799214c37"),
        email: "johndoe@example.com",
        isEmailVerified: true,
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        photoLink: "https://randomuser.me/api/portraits/men/60.jpg",
        isAdmin: false,
        password: "",
        dateRegistered: 1635768314132,
        likedArticles: [ObjectId("61ae6c94c6d7ccfa7d7f0943")],
        __v: 0
    },
    {
        _id: ObjectId("61ae6085cff5c15799214c38"),
        email: "marciasanders@example.com",
        isEmailVerified: true,
        firstName: "Marcia",
        lastName: "Sanders",
        username: "marcia_sanders",
        photoLink: "https://randomuser.me/api/portraits/women/51.jpg",
        isAdmin: false,
        password: "",
        dateRegistered: 1635779879054,
        likedArticles: [ObjectId("61ae6cb0c6d7ccfa7d7f0944")],
        __v: 0
    }
]);

db.tags.insertMany([
    {
        _id: ObjectId("61ae682dba54574a9d25c08a"),
        name: "technology",
        articles: [ObjectId("61ae6c94c6d7ccfa7d7f0943")],
        __v: 0
    },
    {
        _id: ObjectId("61ae682dba54574a9d25c08b"),
        name: "finance",
        articles: [],
        __v: 0
    },
    {
        _id: ObjectId("61ae682dba54574a9d25c08c"),
        name: "medicine",
        articles: [ObjectId("61ae6cb0c6d7ccfa7d7f0944")],
        __v: 0
    },
    {
        _id: ObjectId("61ae682dba54574a9d25c08d"),
        name: "politics",
        articles: [],
        __v: 0
    },
    {
        _id: ObjectId("61ae682dba54574a9d25c08e"),
        name: "art",
        articles: [],
        __v: 0
    }
]);

db.articles.insertMany([
    {
        _id: ObjectId("61ae6c94c6d7ccfa7d7f0943"),
        articleId: 1,
        title: "Accessibility of Remote Meetings",
        author: ObjectId("61ae6085cff5c15799214c38"),
        body: "The impact of COVID-19 has seen a substancial increase...",
        date: 1635794748738,
        comments: [{
            id: ObjectId("61ae6c3cc6d7ccfa7d7f0941"),
            body: "Very interesting!",
            date: 1635883875421,
            author: ObjectId("61ae6085cff5c15799214c37"),
        }],
        tags: [ObjectId("61ae682dba54574a9d25c08a")],
        likes: [ObjectId("61ae6085cff5c15799214c37")],
        __v: 0
    },
    {
        _id: ObjectId("61ae6cb0c6d7ccfa7d7f0944"),
        articleId: 2,
        title: "Natural Language Interface Accessibility",
        author: ObjectId("61ae6085cff5c15799214c37"),
        body: "Spoken interaction with mobile devices and consumer...",
        date: 1635874692391,
        comments: [{
            id: ObjectId("61ae6c68c6d7ccfa7d7f0942"),
            body: "Wow! The provided data is really impressive!",
            date: 1635893898415,
            author: ObjectId("61ae6085cff5c15799214c38"),
        }],
        tags: [ObjectId("61ae682dba54574a9d25c08c")],
        likes: [ObjectId("61ae6085cff5c15799214c37")],
        __v: 0
    }
]);
