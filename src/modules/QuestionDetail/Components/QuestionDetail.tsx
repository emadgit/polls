import React, { useEffect, FunctionComponent } from "react";
import { Question } from "../../../Interface/Question";
import { Choice } from "../../../Interface/Choice";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { WrappedProps } from "../Containers/QuestionDetail";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

export const QuestionDetail: FunctionComponent<WrappedProps> = ({
  handleVote,
  showSnackbar,
  handleClose,
  location
}) => {
  console.log("WTF : ", location.state);
  const data: Question = location.state.question;
  const renderChoices =
    data &&
    data.choices.map((c: Choice) => {
      return (
        <Grid item sm={6} xs={12} md={2} key={c.choice}>
          <Button variant="flat" onClick={() => handleVote(c.url)}>
            <Chip
              color="default"
              label={`
                     ${c.choice} | ${c.votes}

                    `}
            />
          </Button>
        </Grid>
      );
    });
  return (
    <div className="viewSection">
      <Typography variant="title" component="h3" className="whiteColor">
        {data.question}
      </Typography>
      <Grid container spacing={8} className="verticalSpacing">
        {renderChoices}
      </Grid>
      <Snackbar
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom"
        }}
        autoHideDuration={2000}
        open={showSnackbar}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
      >
        <SnackbarContent
          style={{ backgroundColor: "green" }}
          message={<span id="message-id">Your vote counted!</span>}
        />
      </Snackbar>
    </div>
  );
};
