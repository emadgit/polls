import React, { FunctionComponent } from "react";
import { WrappedProps } from "../Containers/CreateComponent";
import { Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

export const CreateQuestion: FunctionComponent<WrappedProps> = ({
  isSubmitting,
  handleChange,
  values,
  history,
  errors
}) => {
  return (
    <div>
      <Form>
        <Grid container spacing={24} style={{ padding: 20 }}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="question"
              name="question"
              label="Question"
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                style: { color: "#fff" }
              }}
              InputProps={{
                style: { color: "#00cea5" }
              }}
              fullWidth={true}
              value={values.question}
            />
            {errors.question && (
              <p style={{ color: "red" }}>{errors.question}</p>
            )}
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="question"
              name="choices"
              label="Choices"
              margin="normal"
              fullWidth={true}
              InputLabelProps={{
                style: { color: "#fff" }
              }}
              InputProps={{
                style: { color: "#00cea5" }
              }}
              style={{ color: "#fff" }}
              onChange={handleChange}
              value={values.choices}
            />
            {errors.choices && <p style={{ color: "red" }}>{errors.choices}</p>}
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Create Question
            </Button>
          </Grid>
        </Grid>
      </Form>

      <Snackbar
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom"
        }}
        autoHideDuration={2000}
        open={isSubmitting}
        onClose={() => history.goBack()}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
      >
        <SnackbarContent
          style={{ backgroundColor: "green" }}
          message={<span id="message-id">Your question created!</span>}
        />
      </Snackbar>
    </div>
  );
};
