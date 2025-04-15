import { Typography } from '@mui/material';

interface Props {
  label: string;
  count: number;
}

const StatusCard = ({ label, count }: Props) => {
  return (
    // <Card sx={{ borderRadius: 2 }}>
    //   <CardContent>
    //     <Typography variant="h6" fontWeight="bold">
    //       {count}
    //     </Typography>
    //     <Typography color="textSecondary">{label}</Typography>
    //   </CardContent>
    // </Card>
    <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
    <div style={{border:'1px solid #DFDFDF',padding:'12px',borderRadius:'8px',minWidth:'226px', width:'100%', height:'59px'  }}>
         <Typography variant="h6" fontWeight="bold">
           {count}
         </Typography>
         <Typography color="#2D2D2D">{label}</Typography>
    </div>
    </div>
  );
};

export default StatusCard;
