import React from "react";
import CourseCard from "./CourseCard";
import courses from "./coursesData";

const App = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", background:"#E8F9FF" }}>
      <img style={{maxHeight: "100px", minWidth: "100%"

      }} src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Ribbons-and-Banners-PNG/Blue_Banner_Transparent_PNG_Image.png?m=1629811735"/>
      <h1 style={{ textAlign: "center", color: "#330" }}>
        Useful Courses & Resources for Entry-Level Software Engineers
      </h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "3.5rem",
        marginTop: "2rem",
      }}>
        <CourseCard {...courses[0]} />
        <CourseCard {...courses[1]} />
        <CourseCard {...courses[2]} />
        <CourseCard {...courses[3]} />
        <CourseCard {...courses[4]} />
        <CourseCard {...courses[5]} />
        <CourseCard {...courses[6]} />
        <CourseCard {...courses[7]} />
        <CourseCard {...courses[8]} />
        <CourseCard {...courses[9]} />
      </div>
    </div>
  );
};

export default App;
