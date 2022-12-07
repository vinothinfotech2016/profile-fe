import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const btnStyle = {
    position:"absolute",
    right:1,
    top:1

}

export default function ImageModal(props) {

  const {source , screenName , open , setOpen} = props
  const [imgSrc , setImgSrc] = React.useState("")

  React.useEffect(()=>{
    let reader
    if(source){
      // console.log("working");
    reader = new FileReader();
    reader.onload = function() {
      setImgSrc(reader.result)
    };
    reader.readAsDataURL(source);
  }
  },[source])
    
  

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
            backgroundColor:"#fff"
        }}
      >
        <Box sx={style}>
            <IconButton sx={btnStyle} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
         <img src={imgSrc} alt={screenName} height="700px" width="1100px"/>
        </Box>
      </Modal>
    </div>
  );
}
