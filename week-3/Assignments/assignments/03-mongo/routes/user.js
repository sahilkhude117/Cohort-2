const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const z = require("zod");

const userSchema = z.object({
    username: z.string(),
    password: z.string().min(4).max(100),
  });

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const zodResponse = userSchema.safeParse(req.body);
    if (zodResponse.data) {
      try {
        const response = await User.create(req.body);
        res.status(201).json({ message: 'User created successfully', response })
      } catch (error) {
        throw new Error(error);
      }
    } else {
      res.status(400).send("Invalid input");
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const response = await Course.find();
        res.status(200).json({ message: 'Courses fetched successfully', response })
      } catch (error) {
        throw new Error(error);
      }
});


// courId: 673a14caebecc205bd7630c7
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try {
      await User.updateOne({
        username: username
      },{
        "$push":{
          purchasedCourses: courseId
        }
      })
    } catch(e){
      console.log(e);
    }
    res.json({
      msg:"Purchase Complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
      username:req.headers.username
    });
    user.purchasedCourse
    const courses = await Course.find({
      _id:{
        "$in" : user.purchasedCourses
      }
    })
    res.json({
      courses : courses
    })
});

module.exports = router