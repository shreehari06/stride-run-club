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
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {announcements.map((announcement) => (
        <Card
          key={announcement.id}
          sx={{
            boxShadow: 4,
            borderRadius: 2,
          }}
        >
          <CardHeader
            title={announcement.title}
            subheader={AnnouncementService.formatTimestamp(
              announcement.timestamp
            )}
            sx={{ pb: 0 }}
            slotProps={{
              title: {
                sx: {
                  fontWeight: "bold",
                  color: "primary.main",
                  typography: "h6",
                  fontSize: "1rem",
                },
              },
              subheader: {
                sx: {
                  color: "text.secondary",
                  typography: "subtitle2",
                },
              },
            }}
          />
          <CardContent>
            <Typography variant="body2" color="text.primary">
              {announcement.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
      {announcements.length === 0 && (
        <Box
          textAlign="center"
          mt={4}
          sx={{
            padding: 4,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            backgroundColor: "background.default",
          }}
        >
          <Typography variant="body1" color="textSecondary">
            No announcements available at the moment.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Announcements;
