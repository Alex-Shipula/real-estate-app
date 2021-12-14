import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import IconButton from '@mui/material/IconButton';
import { BellBadgeProps } from "./TypesUI.props";

export default function BellBadge({...props}:BellBadgeProps): JSX.Element {
  return (
    <IconButton>
    <Badge  badgeContent={props.call} color="error">
      <NotificationsNoneIcon />
    </Badge>
    </IconButton>
  );
}
