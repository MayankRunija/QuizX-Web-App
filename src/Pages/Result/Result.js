import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();
  const rightAns = score/5;
  const wrongAns = 10-rightAns;

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title titlesize">Final Score : {score}</span>
      <span className="title titlesize">Right Answer :{rightAns}</span>
      <span className="title titlesize">Wrong Answer :{wrongAns}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/login"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
