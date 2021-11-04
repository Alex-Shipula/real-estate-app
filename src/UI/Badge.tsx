import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";


export default function BellBadge(): JSX.Element {
  return (
    <Badge  badgeContent={4} color="error">
      <NotificationsNoneIcon />
    </Badge>
  );
}
