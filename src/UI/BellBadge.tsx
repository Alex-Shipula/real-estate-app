import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import IconButton from '@mui/material/IconButton';

interface BellBadge {
  call:number
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BellBadge({...props}:BellBadge): JSX.Element {
  return (
    <IconButton>
    <Badge  badgeContent={props.call} color="error">
      <NotificationsNoneIcon />
    </Badge>
    </IconButton>
  );
}
