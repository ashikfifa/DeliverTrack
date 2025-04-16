import { Typography, Box } from "@mui/material";
import "./statusCard.css";

interface Props {
  label: string;
  count: number;
}

const getBackgroundColor = (label: string): string => {
  switch (label.toLowerCase()) {
    case "pending":
      return "#FFD700";
    case "in transit":
      return "#1E90FF";
    case "delivered":
      return "#32CD32";
    case "not delivered":
      return "#FF6347";
    default:
      return "#E0E0E0";
  }
};

const StatusCard = ({ label, count }: Props) => {
  const bgColor = getBackgroundColor(label);

  return (
    <div className="statusCardHeader">
      <Box
        className="statusCardBorder"
        sx={{
          backgroundColor: bgColor,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {count}
        </Typography>
        <Typography color="inherit">{label}</Typography>
      </Box>
    </div>
  );
};

export default StatusCard;
