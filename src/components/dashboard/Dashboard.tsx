import StatusCard from "../statusCard/StatusCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchDeliveries } from "../../features/deliveries/deliveriesSlice";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const statusCounts = useSelector(
    (state: RootState) => state.deliveries.statusCounts
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, [dispatch]);

  return (
    <>
      <div className="deliveries">
        <p className="titleDelivery">Dashboard</p>
      </div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatusCard label="Pending" count={statusCounts?.Pending} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatusCard label="In Transit" count={statusCounts?.["In Transit"]} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatusCard label="Delivered" count={statusCounts?.Delivered} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatusCard
            label="Not Delivered"
            count={statusCounts?.["Not Delivered"]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
