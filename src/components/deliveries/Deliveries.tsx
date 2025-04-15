import { Button, IconButton, InputBase, Paper } from "@mui/material";
import "./deliveries.css";
import SearchIcon from "@mui/icons-material/Search";
import CustomPaginationTable from "../DeliveryTable/DeliveryTable";
import { useState } from "react";
import DeliverModal from "../addEditDeliveryModal/DeliverModal";
const Deliveries = () => {
  const [openModal, setOpenModal] = useState(false);
  const [query, setQuery] = useState("");

  const handleAddDelivery = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div className="deliveries">
        <p className="titleDelivery">Deliveries</p>
        <Button variant="contained" onClick={handleAddDelivery}>
          ADD DELIVERY
        </Button>
      </div>

      <div style={{ float: "right", marginBottom: "20px" }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
            borderRadius: "24px",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search by recipient or address"
            inputProps={{ "aria-label": "search" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <CustomPaginationTable query={query} />

      {openModal && (
        <DeliverModal
          handleClose={() => {
            setOpenModal(false);
          }}
          openModal={openModal}
        />
      )}
    </div>
  );
};

export default Deliveries;
