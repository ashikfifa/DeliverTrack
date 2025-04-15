import { Grid } from "@mui/material";
import StatusCard from "../statusCard/StatusCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { fetchDeliveries } from "../../features/deliveries/deliveriesSlice";

const Dashboard = () => {
  const statusCounts = useSelector(
    (state: RootState) => state.deliveries.statusCounts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, [dispatch]);

  return (
    <>
      <div className="deliveries">
        <p className="titleDelivery">Dashboard</p>
      </div>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={3}>
          <StatusCard label="Pending" count={statusCounts?.Pending} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatusCard label="In Transit" count={statusCounts?.["In Transit"]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatusCard label="Delivered" count={statusCounts?.Delivered} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
