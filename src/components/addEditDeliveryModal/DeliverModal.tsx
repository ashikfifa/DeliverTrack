import { Box, Button, Modal, Typography } from "@mui/material";
import DeliveryForm from "../deliveryForm/DeliveryForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteDelivery } from "../../features/deliveries/deliveriesSlice";
import { AppDispatch } from "../../store";

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

const DeliverModal = ({
  openModal,
  selectedDelivery,
  handleClose,
}: DeliverModalType) => {
  const dispatch = useDispatch<AppDispatch>();

  const editOr = useSelector((state: any) => state.deliveryModal.editOr);


  const handleDelete = () => {
    if (selectedDelivery?.id !== undefined) {
      dispatch(deleteDelivery(selectedDelivery.id));
    }
    handleClose();
  };

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
        {editOr ? (
          <DeliveryForm
            handleClose={handleClose}
            initialData={selectedDelivery}
          />
        ) : (
          <>
            <Typography variant="h6" mb={1}>
              Delivery Form
            </Typography>

            <p> Are you sure you want to delete the delivery? </p>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button onClick={handleClose} variant="text" type="button">
                Cancel
              </Button>
              <Button variant="contained" type="submit" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default DeliverModal;
