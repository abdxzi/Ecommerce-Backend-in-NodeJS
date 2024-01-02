const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");

// DEV DEPENDENCIES
if (process.env.NODE_ENV !== 'production') {
    const morgan = require("morgan")
    app.use(morgan('dev'));
}

// CONFIGURATIONS
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

// ROUTES
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/categoryRoute");
const couponRouter = require("./routes/couponRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

app.use("/api/user", authRouter); 
app.use("/api/product", productRouter); 
app.use("/api/blog", blogRouter); 
app.use("/api/category", categoryRouter);
app.use("/api/coupon", couponRouter);

app.use(notFound)
app.use(errorHandler)

// CONNECT TO DATABASE
dbConnect() 


app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
});