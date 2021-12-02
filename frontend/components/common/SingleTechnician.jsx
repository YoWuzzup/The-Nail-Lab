import { useStyles } from "./singleTechnician";

export default function SingleTechnician({ data }) {
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}>
      {data.staff_image && (
        <img
          className={`${classes.image}`}
          alt={`${data.name} ${data.surname}`}
          src={`${data.staff_image}`}
        />
      )}

      <div className={`${classes.info}`}>
        <div className={`${classes.name}`}>
          {data?.name}<br/>{data?.surname}
        </div>

        <div className={`${classes.description}`}>
          {data?.info?.map((item, index) => {
            return (
              <div
                key={`${item}_${index}`}
                className={`${classes.description_item}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
