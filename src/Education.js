import './index.css';
function Education() {
  return (
    <div className=" m-5 p-5 ">
      <div className="text-center">
      
        <h1 className='fw-bold'> Education</h1>
        
        <div className=" custom-card  rounded-pill mx-5 my-4 p-4">
          <h4>Jawaharlal Nehru Technological University Kakinada, Kakinada</h4>
          <p>2020-2022</p>
          <p>Master of Business Administration</p>
        </div>
        <div className="custom-card mx-5 rounded-pill my-4 py-4 ">
          <h4>Aditya Degree College, Kakinada</h4>
          <p>2017-2020</p>
          <p> Bachelor of Science(B.Sc)</p>
        </div>
        <div className=" custom-card rounded-pill mx-5 my-4 py-4">
          <h4>Andhra Pradesh Residential Junior College, Nagarjuna Sagar</h4>
          <p>2015-2017</p>
          <p> Senior Secondary Education(MPC)</p>
        </div>
        <div className=" custom-card rounded-pill mx-5 my-4 py-4">
          <h4>Z P High School</h4>
          <p>2014-2015</p>
          <p> Secondary Education</p>
        </div>
        
      </div>
    </div>
  );
}

export default Education;