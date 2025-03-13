const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const templatePath = path.join(__dirname, '../templates');


// Register a Handlebars helper to convert objects to JSON
hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set view engine and templates path
app.set("view engine", "hbs");
app.set("views", templatePath);

// Routes
app.get("/", (req, res) => {
    res.render("login"); // Login page served at root route
});

app.get("/signup", (req, res) => {
    res.render("signup"); // Signup page
});

app.get("/login", (req, res) => {
    res.render("login"); // Explicit /login route
});

app.get("/menu.hbs", (req, res) => {
    res.render("menu"); // Login page served at root route
});

app.get("/specialdiets.hbs", (req, res) => {
    res.render("specialdiets"); // Login page served at root route
});

app.get("/gallery.hbs", (req, res) => {
    res.render("gallery"); // Login page served at root route
});

app.get("/blogs.hbs", (req, res) => {
    res.render("blogs"); // Login page served at root route
});

app.get("/blogs1.hbs", (req, res) => {
    res.render("blogs1"); // Login page served at root route
});

app.get("/blogs2.hbs", (req, res) => {
    res.render("blogs2"); // Login page served at root route
});

app.get("/blogs3.hbs", (req, res) => {
    res.render("blogs3"); // Login page served at root route
});
app.get("/blogs4.hbs", (req, res) => {
    res.render("blogs4"); // Login page served at root route
});
app.get("/blogs5.hbs", (req, res) => {
    res.render("blogs5"); // Login page served at root route
});
app.get("/blogs6.hbs", (req, res) => {
    res.render("blogs6"); // Login page served at root route
});

app.get("/home.hbs", (req, res) => {
    res.render("Home"); // Login page served at root route
});
app.get("/feedback.hbs", (req, res) => {
    res.render("Feedback"); // Login page served at root route
});
app.get("/coffee.hbs", (req, res) => {
    res.render("Coffee"); // Login page served at root route
});
app.get("/coffee1.hbs", (req, res) => {
    res.render("Coffee1"); // Login page served at root route
});

app.get("/pastry.hbs", (req, res) => {
    res.render("Pastry"); // Login page served at root route
});

app.get("/smoothies.hbs", (req, res) => {
    res.render("Smoothies"); // Login page served at root route
});

app.get("/sandwiches.hbs", (req, res) => {
    res.render("Sandwiches"); // Login page served at root route
});

app.get("/mocktails.hbs", (req, res) => {
    res.render("Mocktails"); // Login page served at root route
});

app.get("/dessert.hbs", (req, res) => {
    res.render("Dessert"); // Login page served at root route
});

app.get("/sizzlers.hbs", (req, res) => {
    res.render("Sizzlers"); // Login page served at root route
});
app.get("/tea.hbs", (req, res) => {
    res.render("Tea"); // Login page served at root route
});
app.get("/sundaes.hbs", (req, res) => {
    res.render("Sundaes"); // Login page served at root route
});

app.get("/glutenfree.hbs", (req, res) => {
    res.render("GlutenFree"); // Login page served at root route
});



app.get("/vegan.hbs", (req, res) => {
    res.render("Vegan"); // Login page served at root route
});



app.get("/orderonline.hbs", (req, res) => {
    res.render("orderonline"); // Login page served at root route
});
app.get("/cart.hbs", (req, res) => {
    res.render("Cart"); // Login page served at root route
});


app.post("/signup", async(req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    };

    try {
        await collection.insertOne(data);
        res.redirect("/"); // Redirect to login page after successful signup
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Server error occurred.");
    }
});

app.post("/login", async(req, res) => {
    const { name, password } = req.body;

    try {
        // Check if the user exists with the provided name and password
        const user = await collection.findOne({ name, password });

        if (!user) {
            // If the user does not exist, render the "wrongdetails" page
            return res.render("wrongdetails"); // Ensure you have "wrongdetails.hbs" in your templates
        }

        // If login is successful, render the "home" page
        res.render("home");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Server error occurred.");
    }
});

// Server setup
app.listen(3000, () => {
    console.log("Server connected on port 3000");
});