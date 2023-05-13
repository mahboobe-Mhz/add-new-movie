
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface Props{
  handleClose:()=>void
  open:boolean
  modalData:string

}
// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function BasicModal({handleClose,open,modalData}:Props ) {

  
  return (
    <div>
      
      <Modal
        open={open}
        onClose={()=>handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{display:"flex",justifyContent:"center",alignItems:"center"}}
      >
        <Box sx={{ mt: 5 , color:'white', background:"gray", width:"30rem",height:"10rem",padding:"20px"}}>
        <Typography > توضیحات</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 5 , color:'white', background:"gray", width:"30rem",height:"10rem",padding:"20px"}}>
            {modalData}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
