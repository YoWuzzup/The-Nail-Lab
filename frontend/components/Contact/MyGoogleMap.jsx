import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    height: "360px",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));

const center = {
  lat: 53.4261,
  lng: 14.4821,
};

function MyGoogleMap() {
  const classes = useStyles();
  return (
    <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_API_KEY}`}>
      <GoogleMap
        mapContainerClassName={classes.root}
        center={center}
        zoom={13}
        options={{ draggable: false }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <Marker position={center} />
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyGoogleMap);
