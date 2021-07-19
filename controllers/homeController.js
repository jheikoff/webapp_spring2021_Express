var course = [
    {
        title: "Raspberry Cake",
        cost:50
    },
    {
        title: "Artichoke",
        cost:20
    },
    {
        title: "Burger",
        cost:100
    },

]


exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourses: course});
}

exports.showSignUp = (req, res) => {
    res.render("contact");
}

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
}

exports.showIndex = (req, res) => {
    res.render("index");
}