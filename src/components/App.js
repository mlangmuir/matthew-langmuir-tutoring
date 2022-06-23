import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';
import { GlobalStyle } from "./globalStyles";
import CourseDetails from "./CourseDetails";
import CourseMaterial from "./CourseMaterial";
import Submission from "./Submission";
import Contact from "./Contact";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/course-material">
                    <CourseMaterial />
                </Route>
                <Route exact path="/submission">
                    <Submission />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/courses/:courseId">
                    <CourseDetails />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
