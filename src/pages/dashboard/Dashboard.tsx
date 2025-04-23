
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchDeliveries } from "../../features/deliveries/deliveriesSlice";
import { CircularProgress, Grid } from "@mui/material";
import StatusCard from "../../components/statusCard/StatusCard";

const Dashboard = () => {
  const statusCounts = useSelector(
    (state: RootState) => state.deliveries.statusCounts
  );
  const status = useSelector((state: RootState) => state.deliveries.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, [dispatch]);

  return (
    <>
      <div className="deliveries">
        <p className="titleDelivery">Dashboard</p>
      </div>

      {status === "loading" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatusCard label="Pending" count={statusCounts?.Pending} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatusCard
              label="In Transit"
              count={statusCounts?.["In Transit"]}
            />
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
      )}
    </>
  );
};

export default Dashboard;
