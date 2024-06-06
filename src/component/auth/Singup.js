import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Singup.css";
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
function Singup({setSingin}) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <>
      <div className="singup__model__container">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="singup-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box id="model__section" sx={{ ...style }}>
            <div className="singup__model__box">
              <form onSubmit={handlerSubmit}>
                <div>
                  <label>Username</label>
                  <input type="text" placeholder="enter the username.." />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="enter the email.." />
                </div>
                <div>
                  <label>Password</label>
                  <input type="password" placeholder="enter the password .." />
                </div>
                <div>
                  <label>Confirm Password</label>
                  <input type="password" placeholder="enter the password .." />
                </div>
                <div onClick={()=>[setSingin((pre)=>!pre),setOpen((pre)=>!pre)]} className="singin__back__section">
                  <a>if you already singup</a>
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

export default Singup;
