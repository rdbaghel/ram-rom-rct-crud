import images from "../images/img3.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate= useNavigate();
    const handleButtonClick=()=>{
        navigate("/insert")

    }
    return (
        <div style={{ position: "relative", textAlign: "center" }}>
            <h1 style={{ fontFamily: "fantasy" }}>
                <b>Welcome To Home Page: Student Data Management System</b>
            </h1>
            <img src={images} alt="" width="1240px" height="500px" />
            <button 
                style={{
                    position: 'absolute',
                    top: "100px", 
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "green", 
                    color: "orange", 
                    border: "3px",
                    borderRadius: "8px",
                    transition: "background-color 0.3s, transform 0.3s",
                
                }}
                onClick={handleButtonClick}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "red"} 
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "green"} 
            >
                Click For Add Record
            </button>
        </div>
    );
}

export default Home;
