import Education from "./Education";
import Projects from "./Projects";
function Mainpage() {
    return (
      <div >
        <div className="row p-4 m-4">
            <div className="col-7 text-center align-middle">
                <h2  className="fst-italic">Hello I'm</h2>

                <h1>Naveen Vasamsetti</h1>
            </div>
            <div className=" card col-3 rounded-circle ">
                {/* <img src="Naveen.jpg" alt="Your" /> */}

            </div>
        </div>
        <div>
          <Projects />
          <Education/>

        </div>
        
      </div>
    );
  }
  
  export default Mainpage;