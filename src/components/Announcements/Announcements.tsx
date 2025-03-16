import React, { useEffect, useState } from "react";
import {
  AnnouncementService,
  Announcement,
} from "../../services/AnnouncementService";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Container,
} from "@mui/material";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    const data = AnnouncementService.getAllAnnouncements().sort(
      (a, b) => b.timestamp - a.timestamp
    );
    setAnnouncements(data);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {announcements.map((announcement) => (
        <Card key={announcement.id} sx={{ mb: 3, boxShadow: 3 }}>
          <CardHeader
            title={announcement.title}
            subheader={AnnouncementService.formatTimestamp(
              announcement.timestamp
            )}
          />
          <CardContent>
            <Typography variant="body1">{announcement.content}</Typography>
          </CardContent>
        </Card>
      ))}
      {announcements.length === 0 && (
        <Box textAlign="center" mt={4}>
          <Typography variant="body1" color="textSecondary">
            No announcements available at the moment.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Announcements;
