import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import KeyOffIcon from '@mui/icons-material/KeyOff';
import "./Singin.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 50,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "4px",
};
function Singin({setSingup}) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <>
      <div className="singin__model__container">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="singin-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box id="model__section" sx={{ ...style }}>
            <div className="singin__model__box">
              <form onSubmit={handlerSubmit}>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="enter the email.." />
                </div>
                <div>
                  <label>Password</label>
                  <input type="password" placeholder="enter the password .." />
                </div>
                <div onClick={()=>[setSingup((pre)=>!pre),setOpen((pre)=>!pre)]} className="singin__back__section">
                  <a>sing-up</a>
                </div>
                <div  className="singin__forget__password__section">
                  <a><KeyOffIcon className="forget__icon"/>forget password</a>
                </div>
                <button>Submit</button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Singin;
