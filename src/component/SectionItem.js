import classes from "./SectionItem.module.css";
import { useNavigate } from "react-router-dom";

const SectionItem = (props) => {

    let navigate = useNavigate();
    const select = (value) => {
      const page = value
      let path = "/single";
      navigate(path, {
        state: {
          page
        },
      });
    }
  
    
  return (
    <>
      <div className={classes.container} onClick={()=>select(props)}>
        <div className={classes["image-container"]}>
          <img
            src={props.img}
            alt="this is images"
          />
        </div>
        <div className={classes.name}>
          <div className={classes["name-poke"]}>{props.name}</div>
          <div>#00{props.id}</div>
        </div>
      </div>
    </>
  );
};
export default SectionItem;
