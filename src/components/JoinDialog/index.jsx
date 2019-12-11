import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { toJpDay, Typography } from '../../shared';

const formName = 'JoinDialogForm';

const required = value => (value ? undefined : '必須');
const maxLength = value =>
  value && value.length > 8 ? `${8}文字以上は入力できないよ` : undefined;

const renderTextField = ({ input, meta: { touched, error }, ...rest }) => (
  <>
    <TextField {...input} error={!!(touched && error)} {...rest} />
    {touched && error && (
      <Typography color="secondary" fontSize="14px">
        {error}
      </Typography>
    )}
  </>
);

const JoinDialogForm = ({ joinDate, isOpen, hideDialog, handleSubmit }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={hideDialog}
      aria-labelledby="join-form-dialog"
    >
      <DialogTitle id="join-form-dialog-title">{toJpDay(joinDate)}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogContentText>
            名前は必須、皆が分かる名前にしよう！ <br />※
            他の人と同じ名前は、登録できないよ。
          </DialogContentText>
          <Field
            name="name"
            label="名前"
            type="text"
            validate={[required, maxLength]}
            component={renderTextField}
            fullWidth
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={hideDialog} color="primary">
          キャンセル
        </Button>
        <Button onClick={handleSubmit} color="primary">
          完了
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const JoinDialog = React.memo(
  reduxForm({
    form: formName,
  })(JoinDialogForm),
);
