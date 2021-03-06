import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';
import { GlobalStyle } from "./globalStyles";
import ScrollToTop from "./ScrollToTop";
import CourseDetails from "./CourseDetails";
import CourseMaterial from "./CourseMaterial";
import WeekDetails from "./WeekDetails";
import Submission from "./Submission";
import Contact from "./Contact";
import RouteNotFound from "./RouteNotFound";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <ScrollToTop />
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
                <Route exact path="/course-material/:courseId">
                    <CourseDetails />
                </Route>
                <Route exact path="/course-material/:courseId/:weekId">
                    <WeekDetails />
                </Route>
                <Route path="*">
                    <RouteNotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;