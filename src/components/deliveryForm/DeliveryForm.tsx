import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createDelivery,
  updateDelivery,
} from "../../features/deliveries/deliveriesSlice";
import { AppDispatch } from "../../store";

interface DeliveryFormType {
  handleClose: () => void;
  initialData?: {
    id?: number;
    recipient: string;
    address: string;
    status: string;
    date: string | Date;
  };
}

const DeliveryForm = ({ handleClose, initialData }: DeliveryFormType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formValue, setFormValue] = useState({
    recipient: initialData?.recipient || "",
    address: initialData?.address || "",
    status: initialData?.status || "Pending",
    date: initialData?.date ? new Date(initialData.date) : new Date(),
  });

  const [errors, setErrors] = useState({
    recipient: false,
    address: false,
    status: false,
    date: false,
  });

  const handleChange = (field: string) => (event: any) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormValue((prev) => ({
        ...prev,
        date,
      }));
      setErrors((prev) => ({
        ...prev,
        date: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      recipient: formValue.recipient.trim() === "",
      address: formValue.address.trim() === "",
      status: formValue.status.trim() === "",
      date:
        !formValue.date || formValue.date < new Date(new Date().toDateString()),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error);

    if (hasError) {
      console.warn("Validation failed", newErrors);
      return;
    }

    const formattedData = {
      ...formValue,
      ...(initialData?.recipient ? { id: initialData?.id } : {}),
      date: formValue.date.toLocaleDateString("en-CA"),
    };

    if (initialData?.id) {
      dispatch(updateDelivery({ id: initialData.id, ...formattedData }));
      handleClose();
    } else {
      dispatch(createDelivery(formattedData));
      handleClose();
    }
  };

  return (
    <div>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
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
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" mb={1}>
          Delivery Form
        </Typography>

        <FormControl error={errors.recipient}>
          <InputLabel htmlFor="recipient">Recipient</InputLabel>
          <OutlinedInput
            id="recipient"
            value={formValue.recipient}
            onChange={handleChange("recipient")}
            label="Recipient"
            required
          />
        </FormControl>

        <FormControl error={errors.address}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <OutlinedInput
            id="address"
            value={formValue.address}
            onChange={handleChange("address")}
            label="Address"
            required
          />
        </FormControl>

        <FormControl error={errors.status}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            value={formValue.status}
            onChange={handleChange("status")}
            input={<OutlinedInput label="Status" />}
            required
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Transit">In Transit</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Not Delivered">Not Delivered</MenuItem>
          </Select>
        </FormControl>

        <FormControl error={errors.date}>
          <DatePicker
            selected={formValue.date}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            customInput={<OutlinedInput label="Date" required />}
          />
        </FormControl>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button onClick={handleClose} variant="text" type="button">
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            {initialData?.address ? "Update" : "Add"}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default DeliveryForm;
