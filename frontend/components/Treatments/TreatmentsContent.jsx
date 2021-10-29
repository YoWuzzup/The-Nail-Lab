import { Service } from "../";
import { useStyles } from "./treatmentsContent";

export default function TreatmentsContent() {
  const classes = useStyles();
  const sortingInfo = ["manicure", "pedicure", "get polish", "nail art"];
//   
  const dummyService = [1, 2, 3];

  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.sorting}`}>
        {sortingInfo.map((item, index) => (
          <div className={`${classes.sorting_button}`} key={`${item}_${index}`}>
            {item}
          </div>
        ))}
      </div>

      <div className={`${classes.service_block}`}>
        {dummyService.map((item, index) => (
          <Service key={`${item}_${index}`} />
        ))}
      </div>
    </div>
  );
}
