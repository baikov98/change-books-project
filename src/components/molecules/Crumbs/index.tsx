import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

interface ICrumbs {
  value: string;
  link: string;
}

interface IProps {
  data: ICrumbs[];
}

const Crumbs: React.FC<IProps> = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    value: string
  ) => {
    event.preventDefault();
    history.push(value);
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {!!data.length &&
        data.map((item: ICrumbs, index: number) => (
          <Link
            key={`Crumbs-${index}`}
            className={
              index === data.length - 1 ? classes.active : classes.inactive
            }
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
              handleClick(event, item.link)
            }
          >
            {item.value}
          </Link>
        ))}
    </Breadcrumbs>
  );
};

export default Crumbs;
