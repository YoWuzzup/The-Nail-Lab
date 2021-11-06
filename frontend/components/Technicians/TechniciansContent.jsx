import { useEffect } from "react";
import { SingleTechnician } from "../";
import { useStyles } from "./techniciansContent";
import { useDispatch, useSelector } from "react-redux";
import { getTechnicians } from "../../Redux/Actions/Technicians";

export default function TechniciansContent() {
  const dispatch = useDispatch();
  const fetchedTechnicians = useSelector((state) => state.technicians);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getTechnicians());
  }, []);

  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.staff_block}`}>
        {fetchedTechnicians?.map((tech, index) => {
          return <SingleTechnician key={`${tech.name}_${index}`} data={tech} />;
        })}
      </div>
    </div>
  );
}
