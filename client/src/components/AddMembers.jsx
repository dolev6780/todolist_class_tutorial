import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddMembers({darkMode}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip
        title="Add members"
        arrow
        slots={{
          transition: Zoom,
        }}
      >
        <button
          className="px-2 hover:bg-neutral-200 rounded-full"
          onClick={handleClickOpen}
        >
          <PersonAddAlt1Icon />
        </button>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor: `${darkMode ? "#262626" : "white"}`, color: `${darkMode ? "white" : "#262626"}` }} id="customized-dialog-title">
         Add Members
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: `${darkMode ? "white" : "#262626"}`,
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{backgroundColor: `${darkMode ? "#262626" : "white"}`, color: `${darkMode ? "white" : "#262626"}`}}>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions sx={{backgroundColor: `${darkMode ? "#262626" : "white"}`, color: `${darkMode ? "white" : "#262626"}`}}>
          <Button autoFocus onClick={handleClose} sx={{color: `${darkMode ? "white" : "#262626"}`}}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
