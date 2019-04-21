import * as React from "react";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <div className="viewSection">
      <Typography
        component="h2"
        variant="display2"
        className="whiteColor"
        gutterBottom
      >
        Welcome to Polls App!
      </Typography>
      <Typography component="p" variant="body2" className="whiteColor">
        Here you can view polls and vote in them ;)
      </Typography>
    </div>
  );
};

export default Home;
