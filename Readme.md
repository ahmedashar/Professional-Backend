# This is the professional backend structure

# step1: npm init--> for pkg managing
# step2: create Readme.md
# step3: create folder like public/temp --> public/temp/.gitkeep
#       when we create the empty folders for testing the git ignore those folders which doesn't contain any file, so we create a file .gitkeep (empty file, just a standard )
# step4: create .gitignore file and generate the content for them using ("https://mrkandreev.name/snippets/gitignore-generator/#Node")
# step5: .env file (env --> get data from system environment variables).
# step6: create src folder
# step7: create 3 files app.js, index.js, constant.js
# install nodemon: dev dependancy, just reload server when we save the files, so dev dependencies are not load in production, "--save-dev" use for installing dev dependencies
# step8: create folders like controllers, dp, middlewares, routes, utils 
# step9: mongoDB connection string add in .env file 
#           MONGODB_URI = mongodb+srv://ashar:w7Q31Ce33Y3iITp4@hellodb.llq2r0x.mongodb.net/
#           add PORT and MONGODB in .env
#        constant.js mai db name rkhna hy export --> const  DB_NAME = "professionalDB"
--------------
# step10 : connect mongodb code in DB folder
# step11 : update pkg dev for .env -->  "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
------------- DB connection successfully updated
# utils
# step12: create asyncHandler function in utils, its a higher order function which can takes function as argument or return as well
# step13: create class for api errors
# step13: create class for api response
-------
# models
# step14: create models 
# step15: npm i mongoose-aggregate-paginate-v2 (for aggregation)  --> videoSchema.plugin(mongooseAggregatePaginate);
--------
# step16: npm i bcrypt // used to secure password // and npm i jsonwebtoken --> // jwt is the token or a key (if you have key you can access the data)
#1 use pre hook for bcrypt --> bcrypt.hash and bcrypt.compare
#2 create method in schema isPasswordCorrect
#3 in env file we create keys/expiry for JWT token
#4 create methods in schema generateAccessToken and generateRefreshToken

# step17: file Handeling --> utils/cloudinary.js and middlewares/multer.middleware.js
# multer // its a method of uploading files to cloudinary + cloudinary // its a service 
# logic --> first we upload file in server then to cloudinary, after success we remove it from server (its the best approach)

-------------------------------
# HTTP: 
-------------------------------
# step18: 