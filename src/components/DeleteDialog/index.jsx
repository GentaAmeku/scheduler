import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { toJpDay } from '../../shared';

export const DeleteDialog = ({ targetDate, isOpen, hideDialog, onSubmit }) => {
  return (
    <Dialog open={isOpen} onClose={hideDialog} aria-labelledby="delete-dialog">
      <DialogTitle id="delete-dialog-title">{toJpDay(targetDate)}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          登録した予定を削除しても良いですか？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={hideDialog} color="primary">
          キャンセル
        </Button>
        <Button onClick={onSubmit} color="primary">
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
