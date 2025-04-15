import { Box, Modal } from "@mui/material";
import DeliveryForm from "../deliveryForm/DeliveryForm";

interface DeliverModalType {
  openModal: boolean;
  handleClose: () => void;
  selectedDelivery?: {
    id?: number;
    recipient: string;
    address: string;
    status: string;
    date: string;
  };
}


const DeliverModal = ({ openModal,selectedDelivery,handleClose }: DeliverModalType) => {

return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
       <DeliveryForm handleClose={handleClose} initialData={selectedDelivery} />


  
      </Box>
    </Modal>
  );
};

export default DeliverModal;
