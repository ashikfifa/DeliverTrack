import { Typography } from "@mui/material";
import "./statusCard.css";

interface Props {
  label: string;
  count: number;
}

const StatusCard = ({ label, count }: Props) => {
  return (
    <div className="statusCardHeader">
      <div className="statusCardBorder">
        <Typography variant="h6" fontWeight="bold">
          {count}
        </Typography>
        <Typography color="#2D2D2D">{label}</Typography>
      </div>
    </div>
  );
};

export default StatusCard;
