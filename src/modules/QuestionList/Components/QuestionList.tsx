import React, { FunctionComponent } from "react";
import * as _ from "lodash";
import Chip from "@material-ui/core/Chip";
import { differenceInDays } from "date-fns";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

import { WrappedProps } from "../Containers/QuestionList";

export const QuestionList: FunctionComponent<WrappedProps> = ({
  questions
}) => {
  const renderQuestions =
    questions.length > 0
      ? questions.map(q => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              key={q.url}
              className="listItem"
            >
              <Link
                className="noTextDecoration"
                to={{
                  pathname: q.url,
                  state: {
                    question: q
                  }
                }}
              >
                <Paper elevation={1} className="padding-10 margin-10">
                  <Typography variant="h5" component="h3">
                    {q.question}
                  </Typography>
                  <Typography component="p">
                    Published : {differenceInDays(new Date(), q.published_at)}{" "}
                    days ago
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          );
        })
      : "";
  return (
    <div className="viewSection">
      {questions.length > 0 ? (
        <div>
          <Chip
            label={`Total Questions :  ${questions.length}`}
            color="primary"
          />
          <div className="verticalSpacing">
            <Typography
              component="h3"
              variant="subtitle1"
              className="whiteColor"
              gutterBottom
            >
              Choose your question
            </Typography>
          </div>
          <Grid container spacing={8} className="verticalSpacing">
            {renderQuestions}
          </Grid>
        </div>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
};
