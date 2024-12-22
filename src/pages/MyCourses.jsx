import React from "react";
import Title from "../components/Ui/Title";
import MyCoursesCard from "../components/myCourses/MyCourses";

function MyCourses() {
  return (
    <>
      <section className="p-4 ">
              <Title title="My Courses" size="text-xl" color="text-gray-700" />
              <h1 className="text-gray-700">Did you miss class? No worries, you may watch the class video whenever and wherever it's convenient for you.</h1>
              <div className="py-10">
                  <MyCoursesCard/>
              </div>
      </section>
    </>
  );
}

export default MyCourses;
